# @spotify/web-artists

## 0.1.2

### Patch Changes

- a5ceca4: Split the largest source files into focused modules without changing any
  behaviour. On the server the tracks service became separate query, upload, and
  streaming services, the audio pipeline separated encoding from upload and
  publication, the WebSocket gateway handed its connection and playback state to
  a registry, social sign-in moved to its own controllers on both sides, and the
  database seeder became one seeder per step. In the player the stream loader
  separated bitrate choice and the download loop from the MediaSource lifecycle.
  In the artist app the registration form, the header submenu, and the slide
  video hook each split along their own seams.
- Updated dependencies [a57b74d]
- Updated dependencies [f72b2f0]
  - @spotify/ui-react@0.1.0

## 0.1.1

### Patch Changes

- Updated dependencies [7aaa0f4]
  - @spotify/ui-react@0.0.2
