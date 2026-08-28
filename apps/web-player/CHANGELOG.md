# @spotify/web-player

## 0.2.0

### Minor Changes

- 29a1bea: Added the artist page with follow, popular tracks and discography, a real playback
  queue with a dedicated screen, three-state repeat, a lyrics screen, and artists in
  search results behind working filter tabs. Settings now persist across reloads, and
  the compact-library and now-playing-panel switches actually change the interface.
  Replaced the hardcoded credits block with the playing track's real artist, connected
  the previously dead "Popular artists" section and home tabs, added global playback
  shortcuts, error/not-found boundaries, and a PWA manifest with robots and sitemap.
- f72b2f0: Listening history is now recorded. A track played for more than fifteen seconds
  is written to the history, which had never happened — the mutation existed but
  nothing called it, leaving the history table empty for every user and "Top
  artists this month", "Top tracks this month" and Recents permanently blank.

  The library sidebar filter chips now actually filter. They previously kept their
  selection in local state that nothing consumed, and an active chip painted white
  text on a white background. Followed artists and saved episodes join playlists
  in the list, each linking to its own screen. The "Albums" chip was removed
  because no per-user saved-album endpoint exists behind it.

  The profile gained a "Following artists" section, so artists you follow are
  visible somewhere, and its sections are evenly spaced instead of colliding.

  The avatar picker accepts a dropped image and no longer shows the browser's
  own locale-specific "no file chosen" label, which contradicted the language
  selected in the app.

- f72b2f0: The light theme reads as a designed counterpart to the dark one rather than an
  inversion of it. The dark theme builds depth by floating lighter panels on a
  near-black page; the light theme had flipped that relationship, making the page
  pure white and the panels grey, so nothing could sit above anything and every
  screen collapsed into one flat sheet. The page now recedes to a soft neutral,
  panels come forward in white, hairlines carry the edges where white meets white,
  and body copy uses a deep ink instead of full-strength black.

  The home hero's ambient wash became a theme token, so it stays moody in the dark
  and turns into a pale tint in the light instead of a saturated purple slab. The
  gradients over the profile and playlist action bar, the carousel arrows, the
  active library filter chip and the empty Liked Songs message no longer assume a
  dark background.

  Light-theme type was also toned down. Dark text on a light ground is rendered
  with subpixel antialiasing that thickens every stroke, so the weights tuned for
  the dark theme read as heavy-handed here: grayscale smoothing and a one-notch
  step down across the bold range restore the intended feel without touching the
  dark theme. Body copy sits on a soft graphite rather than near-black, and the
  profile avatar's surround follows the theme instead of staying a dark disc.

- f72b2f0: Playback now opens at the quality the connection actually supports. Every track
  previously started on the lowest rung and climbed, because each track built a
  brand-new bandwidth estimate from zero — so even on fast connections the first
  ~20 seconds played at 128k. The measured estimate is now remembered across
  tracks and reloads and picks the opening rendition, while a genuinely cold start
  with nothing measured still opens low. A remembered estimate older than six
  hours is discarded rather than trusted.

### Patch Changes

- f72b2f0: The artist page's "About" card now lays the listener count and biography over
  the portrait instead of splitting them into an image and a separate grey strip,
  matching how the block is presented in the real product. The biography is
  clamped to three lines with a show more/less toggle, and the card grows with an
  expanded biography rather than clipping it.
- f72b2f0: The next/previous track hover cards space the cover art away from the label
  instead of butting them together. Dragging a sidebar edge now tracks the pointer
  directly: the 300ms grid transition that makes the collapse/expand buttons
  smooth was also animating every drag frame, so the sidebar trailed the cursor.
  The main footer's Facebook link uses the glyph icon matching the Twitter and
  Instagram marks instead of a filled blue disc.
- 82cf091: The FSD layer guard now enforces the rule it claimed to. Its restricted-import
  list held exact specifiers such as `@/entities`, but `tsconfig` maps `@*` to
  `./src/*`, so `@entities/Player` and any deeper path resolved while matching
  nothing — the lint rule reported violations only for an import form the codebase
  never uses. It now matches both alias forms at any depth.

  With the guard working, seventeen genuine violations surfaced and are fixed: the
  Media Source Extensions playback subsystem lived in `shared/` while importing
  from `entities/Player`, and two files in `shared/hooks/` were re-export shims for
  `entities/Track`. The subsystem moved into the Player entity that owns it, the
  shims are gone, and its one remaining cross-entity dependency — a domain type it
  used for two fields — is now a narrow type the Player entity declares itself.

  Navigation, styling and settings fixes ride along: the mobile bottom bar is built
  from links rather than buttons, so middle-click and open-in-new-tab work again;
  the settings dropdown no longer becomes keyboard-unreachable when it is given an
  empty option list; overlays share one z-index scale instead of eleven ad-hoc
  values with `!important` escapes; and raw palette colours were replaced with
  design tokens.

- 8ef2285: A stalled audio fragment request no longer ends playback in silence. The
  per-attempt timeout aborted its own `AbortController`, and the retry backoff
  then waited on that same already-aborted signal — so it resolved immediately and
  the request returned "superseded" on the first attempt. The buffer filler reads
  that as a benign cancellation, so it stopped without reporting an error, the
  250 ms refill tick restarted it forever, and neither the error toast nor the
  CMAF-to-HLS fallback ever fired. The configured retry budget was dead for every
  timeout. Backoff now waits on a plain delay and checks currency afterwards, and
  an exhausted request throws so the caller can surface it.

  Recovering from a full media buffer also works in the first 30 seconds of a
  track: the quota handler previously only trimmed behind the playhead, which
  frees nothing that early, so the track dropped out of Media Source Extensions
  entirely. It now falls back to evicting buffered media ahead of the playhead,
  keeping a safety margin around the current position.

  Skipping backwards from the first track no longer wraps to the end of the queue
  when repeat is off, matching how skipping forward from the last track behaves.

- a5ceca4: Split the largest source files into focused modules without changing any
  behaviour. On the server the tracks service became separate query, upload, and
  streaming services, the audio pipeline separated encoding from upload and
  publication, the WebSocket gateway handed its connection and playback state to
  a registry, social sign-in moved to its own controllers on both sides, and the
  database seeder became one seeder per step. In the player the stream loader
  separated bitrate choice and the download loop from the MediaSource lifecycle.
  In the artist app the registration form, the header submenu, and the slide
  video hook each split along their own seams.
- 4c0b453: Aligned the web player with the regenerated OpenAPI contract: track responses now validate the `playbackVersion`, `fragmentTimescale`, and `durationTicks` fields the API already returns, and the user search request no longer sends invalid path parameters for an endpoint that only accepts query parameters.
- f72b2f0: Search results appear again. The client schema required the singular type name
  ("playlist") while the API labels each result with the plural form it was
  queried by ("playlists"), and required all four result buckets even though the
  API returns only the ones asked for. Either mismatch rejected the whole
  response, so a search that found something rendered as "No results found" while
  a search that genuinely found nothing looked fine.

  The profile grids use auto-fill like every other grid in the app instead of
  auto-fit, which had stretched a couple of followed artists across half the page.

- f72b2f0: Settings no longer stretch the page past the viewport. The avatar picker's
  visually hidden file input is absolutely positioned, and with no positioned
  ancestor it was laid out against the page root, escaping the app shell's
  overflow clipping and leaving several thousand pixels of unpainted space below
  the interface.

  The Playback section drops the "Download the free app" promo, which advertised a
  desktop app that does not exist and whose button had no behaviour.

  Liked Songs uses a vector cover instead of a 48x48 JPEG that was being upscaled
  roughly sixfold wherever it appeared.

- Updated dependencies [a57b74d]
- Updated dependencies [f72b2f0]
  - @spotify/ui-react@0.1.0

## 0.1.0

### Minor Changes

- eedc147: Add adaptive HLS audio variants, resilient hls.js playback, and an atomic BullMQ conversion pipeline with versioned jobs, retries, FFmpeg timeouts, stale-job protection, cleanup, and processing statuses.

### Patch Changes

- 7aaa0f4: Fix authorization and private playlist exposure, make cache fallbacks safe, repair auth request retries and media URLs, and restore Base UI wrapper compatibility.
- Updated dependencies [7aaa0f4]
  - @spotify/ui-react@0.0.2
