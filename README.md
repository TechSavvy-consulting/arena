# TechSavvy Arena website

Public download/showcase website for Kyle Hearn's TechSavvy Arena.

Live URL: https://techsavvy-consulting.github.io/arena/

Buildless HTML/CSS/JavaScript, GitHub Pages from `main` root. The Windows game
ZIP is a GitHub Release asset, not part of this website's Git history. No game
source, raw photo references, player saves, credentials or private documents are
included. Existing game source and released package are not modified.

## Media provenance

The current website has no video player or Watch the Game button. Its single
Kyle gallery combines the remaining enemy, guardian and champion images without
group tabs, omitting the Sniper, Grenadier, Stalker, Squid, Foundry Enforcer and
Transit Sentinel cards as requested. Tight thumbnail framing keeps characters
close, while image viewers retain the full originals. The six arena previews
show active crowds captured in the unchanged v0.11 game. A prominent download
callout highlights extracting the folder and launching TechSavvyArena.exe. The
header and favicon use the existing TechSavvy headset-head logo, not the game
icon. Previously published unused media is retained for rollback.

The homepage hero uses Kyle's supplied full cast picture, unchanged. It fits
without cropping; the original 30 WAVES TO MAKE IT COUNT badge sits in a
separate footer strip below the art so it cannot cover any character.

All gameplay/map/character screenshots and the new short in-engine showcase
come from TechSavvy Arena v0.11.0 at source commit
`33dc7efeb8f91cbc35a56d31c58de34b757f56b4`. Character close-ups and video shots
are staged in-engine capture fixtures, not AI-painted gameplay or human
playthrough claims. The separate illustrated character posters are the same
approved artwork used inside Pause → Characters. `assets/media-manifest.json`
records source paths without private absolute paths and SHA-256 hashes.

Screenshot/media capture tools live outside this public repository under the
task-specific Codex Temp directory. Only final, approved media is published.

## Updating a release

1. Verify the new game package and third-party notices; do not include saves.
2. Publish its Windows ZIP, release notes and SHA256SUMS.txt as Release assets.
3. Update visible version/size, download URLs, screenshots and social preview.
4. Run local link/content/accessibility/browser checks and review mobile.
5. Push `main`; wait for Pages to finish and verify the live HTML/assets/download.

## Notices

Created for and featuring Kyle Hearn. TechSavvy Consulting. Development with
Codex. Game and third-party asset notices ship in the Windows download. DS4Windows,
DualShock, PlayStation, Windows and Xbox are third-party product names; this
independent personal game is not affiliated with their manufacturers.

The current executable is unsigned. Do not advise users to disable Windows
security or install unknown drivers. No account, analytics or external web font
service is required by this website. GitHub operates the hosting platform.
