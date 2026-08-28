# @spotify/api

## 0.1.1

### Patch Changes

- f72b2f0: Album endpoints returned the `AlbumTrack` join-row id in place of the track's
  own id, because the membership row was spread over the track and its `id` won.
  Every track started from an album page therefore asked the playback endpoints
  for a non-existent id and failed with a 404 on both the CMAF manifest and the
  HLS fallback. The flattening now drops the join row's id while still letting the
  album-specific `trackNumber`/`discNumber` override the track's own.
- b27c405: Swagger examples no longer embed the current time. Four fields in the liked-tracks
  response example called `new Date()` at module load, so every API boot produced a
  different OpenAPI document and therefore a different generated contract. That made
  the contract reproducible only against the exact second it was generated: even a
  freshly committed `v1.ts` would be reported as drifted on the next CI run. The
  examples now use a fixed instant, the way the neighbouring `releaseDate` already did.
- ea3d30a: Deleting a track now actually stops it streaming. Both HLS entry points — the
  master playlist and the per-rendition assets — read the track without checking
  `deletedAt`, and the asset route checked no track state at all, so a soft-deleted
  track kept serving its full audio indefinitely while every other read path in the
  module filtered it out.

  Uploading a track no longer records a `TrackFile` row pointing at a bare multer
  filename rather than a storage key. That row survived publication, so a later
  progressive request for the source format resolved a path that does not exist and
  returned 404 for a perfectly healthy track. The `format` query parameter is now
  restricted to the supported progressive formats instead of accepting any string.

  Ranged responses omit `Content-Length` when the storage driver does not report
  one, instead of sending `0` or the literal text `undefined` alongside a non-empty
  body. Liking an already-liked playlist, or registering a device twice
  concurrently, now returns 409 instead of a generic 500.

- f72b2f0: Track durations stopped being invented. The seeder generated a random 180-300
  second duration and used it to overwrite the real value that had already been
  read from the audio file on upload, so every seeded track was wrong by up to
  147 seconds in either direction, and instrumental versions inherited the main
  track's duration. The seeder now leaves the file-derived duration alone, and
  existing rows were recomputed from the CMAF fragment index.

  Also removed a legacy seeded track that had no audio files at all and was stuck
  in PROCESSING, and corrected a seeder log line that claimed to fall back to the
  remote source URL when a download failed — no such fallback exists, the track is
  skipped instead.

- f72b2f0: OAuth redirect URIs now include the API's global prefix and version. The
  callback routes live under `/api/v1`, but the URI handed to Google and Facebook
  pointed at `/auth/oauth/<provider>/callback`, which 404s — so sign-in would have
  failed on the return leg the moment credentials were configured, for both the
  user and the artist flows.
- a5ceca4: Split the largest source files into focused modules without changing any
  behaviour. On the server the tracks service became separate query, upload, and
  streaming services, the audio pipeline separated encoding from upload and
  publication, the WebSocket gateway handed its connection and playback state to
  a registry, social sign-in moved to its own controllers on both sides, and the
  database seeder became one seeder per step. In the player the stream loader
  separated bitrate choice and the download loop from the MediaSource lifecycle.
  In the artist app the registration form, the header submenu, and the slide
  video hook each split along their own seams.
- e0fcd01: The reverse proxy no longer lets a client choose its own IP address. `/api` was
  hardened to send `X-Forwarded-For: $remote_addr`, but `/uploads` — which also
  reaches the API — set no proxy headers at all, so a client-supplied
  `X-Forwarded-For` passed through untouched and, with `TRUST_PROXY_HOPS=1`,
  became `req.ip`. Rate-limit buckets and audit IPs were spoofable on that route.
  The remaining blocks appended the client value instead of replacing it; since
  this nginx is the outermost proxy, every block now sends `$remote_addr`.
- Updated dependencies [abe3615]
  - @spotify/converter@1.2.0

## 0.1.0

### Minor Changes

- a43dc9e: Add a StorageService driver abstraction for track audio/HLS storage, selectable via the new `STORAGE_DRIVER` env var (`s3` or `local`, defaulting to `local`). The local filesystem driver provides full feature parity with the existing S3 driver, including HTTP Range-request progressive streaming, HLS playlist/segment serving, and a signed-URL equivalent of S3 presigned URLs. S3 credentials are now only required when `STORAGE_DRIVER=s3`, so a fresh clone can boot without configuring MinIO/AWS.

### Patch Changes

- eedc147: Add adaptive HLS audio variants, resilient hls.js playback, and an atomic BullMQ conversion pipeline with versioned jobs, retries, FFmpeg timeouts, stale-job protection, cleanup, and processing statuses.
- 7aaa0f4: Fix authorization and private playlist exposure, make cache fallbacks safe, repair auth request retries and media URLs, and restore Base UI wrapper compatibility.
- Updated dependencies [eedc147]
  - @spotify/converter@1.1.0
