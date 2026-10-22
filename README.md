# TechSavvy Arena website

Public download and showcase for TechSavvy Arena, featuring Kyle Hearn.
TechSavvy Consulting LLC. Development with Codex.

Requested address: https://techsavvy-consulting.github.io/arena/

Buildless HTML/CSS/JavaScript on the existing GitHub Pages repository.
The game ZIPs are GitHub Release assets, not website Git contents. Never add
source game data, private photos, player profiles/saves, credentials or local
working evidence. The website cannot modify an installed game's local data.

## Preserved design

Keep the approved full-cast hero, its separate 30 WAVES TO MAKE IT COUNT footer,
headset-head logo/favicon, prominent extract-and-launch callout, single combined
Kyle gallery, obvious arena selectors, local-face guidance and compact expandable
build history. No video player or Watch the Game button. The user-selected
welcoming-committee close-up at `assets/boss-3.webp` intentionally remains the
older approved image; its caption does not call it a v2.5 capture.

## v2.5.0 release

Current package: `TechSavvy-Arena-v2.5.0.zip`.
Release URL: https://github.com/TechSavvy-consulting/arena/releases/tag/v2.5.0
Verified archive: 1,281,336,324 bytes (1,281 MB decimal), SHA-256
`4abd831a90ba08febad70641d66ee22aa6a2b3743954452e2eb9c69473487891`.
Game source commit: `89c72aa5d98c7f8308e4e24e33f9c48e6340946f`.
The current release metadata is also recorded in `assets/build-history.json`.

The full six-facility/thirty-encounter game retains five guns, eight uncapped
upgrade benefits, Easy/Normal/Hard, eighteen tracks across six offline music
stations, checkpoints and offline named face profiles. The full-roster native
character art covers twelve ordinary enemies, six guardians and six champions.

New in this release:

- Busier routes: small pursuit packs between mission objectives.
- A room control that starts combat releases its enemies immediately, without
  a second activation dot.
- A steady, independently smoothed route compass; written hints stay top left.
- Uncapped collected grenade and reserve-ammo storage; normal ammo consumption,
  reloading and magazine limits remain. Passive grenade regeneration targets
  five and does not remove collected excess.
- Five shorter settings pages: Audio, Controls, Gameplay & comfort,
  Graphics & display, and How to play.
- Featuring Kyle Hearn / TechSavvy Consulting LLC credits.

Keyboard Shift defaults to hold sprint; controller L3 toggles sprint. R3 means
clicking the right stick for melee, not moving it. Automatic prompts follow the
last input. DS4Windows virtual Xbox 360/XInput output is the supported controller
path. Physical-controller testing is not implied by scripted checks.

## Current media and provenance

The original v2.5 media remains in `assets/v25/`: home, pause, upgrades, victory,
personalization, options hub and all five category pages; six primary and six
alternate facility views; twenty-four background-free character portraits;
and a social preview. Retain earlier assets for recoverability.

Location-only refresh, October 22: the twelve primary/alternate images in
“New arena. New problems.” use `assets/v25-locations-20261022/` and its
`location-manifest.json`. These are closer staged native enemies in the same
v2.5 geometry, cameras and lighting—not a new game build. Menus, portraits,
hero, social image, welcoming tile and game downloads remain unchanged.

The twelve distinct room views remain:

- Foundry Complex: Furnace Gallery / Crane Workshop.
- Flooded Transit: Flooded Platform / Dispatch Room.
- Mutation Laboratory: Containment Hall / Observation Room.
- Flooded Research Complex: Sample Archive / Water Treatment.
- Sky Docks: Launch Chamber / Sky Control.
- Alien Reactor Fortress: Reactor Heart / Coolant Injection.

Root-run external tools photograph the exact final PCK using its supplied
SHA-256. Main runs in isolated test mode with owned disposable save/profile
fixtures; cast views use the actual native factory without Main or profile
storage. Fresh output directories preserve earlier evidence.

Arena views have staged camera/enemy starts and briefly running actual AI.
Menu progress is a fixture, not a human playthrough. Character portraits use
studio lighting and alpha backgrounds, not room screenshots, AI redraws or
retouched faces. Whole-model framing and contain-fit CSS preserve heads/limbs.
Godot's transparent studio viewport does not render the heads' subsurface
scattering; these studio head-lighting views are not exact gameplay-lighting
matches. The model geometry, materials and public face assets are unchanged.
Only the public default Kyle may appear; never load private saved people.
The website manifests record final image/source/PCK hashes and capture limits.
Original v2.5 media was encoded from the successful 471-check world/menu capture
and 562-check cast capture, then copied with all fifty file hashes verified.
The retained original media directory is about 5.7 MB, not another game ZIP.

The existing cast posters and hero are approved illustrations, not real-time
fidelity evidence. The game uses articulated modeled bodies and fitted photo
heads, not scanned photorealism.

Public character-model attribution is linked from the footer at
`licenses/CHARACTER_MODELS.txt`, including the modified Sotudios Aero
CC BY 4.0 base and the existing CC0 FORGE pilot asset.

## Save compatibility and privacy

v2.5 keeps the exact v2.4 application-data identity:
`TechSavvyArenaRosterUpgrade-20261021`. Its checkpoint, settings and named
face library are retained. Do not reset or silently migrate that directory.

v2.2 and earlier use separate data and are not silently imported. Extract
updates into new game folders; back up data before switching. Separate install
folders do not always imply separate save storage. Adding/selecting a face
does not create a separate campaign slot.

Happy JPG/PNG plus optional Focused/Angry photos are processed locally. Preview
before Apply, Save name, named portrait selection, Restore Kyle and confirmed
deletion remain documented. One-photo expressions are approximate and can
retain the smile; this is not a 3D scan. No upload, account or analytics service.

## Historical downloads

Keep every previously published record in `assets/build-history.json`, including
separately labeled previews and experiments. Add v2.4 and v2.2 beneath the current
v2.5 download, using actual release ZIP sizes and SHA-256 values. No remote
release/asset deletions are approved by the retained-all history decision.

The page keeps history expandable, not another large gallery. Historical builds
retain known bugs and differing save formats; archive integrity is not a new
playthrough or a promise of save interchangeability.

## Verification and publication

1. Root verifies the complete new game package and excluded private data.
2. Root publishes ZIP, notes and checksum; actual sizes/hashes populate the page.
3. Confirm all current image paths and provenance, history records and controls.
4. Run static checks and desktop/mobile browser review.
5. Root commits/pushes; verify Pages, live HTML/media and release downloads.

Root owns all commit/push/publication and domain changes. Source preparation is
not proof of a live deployment. Do not publish missing media or unverified
download metadata. Domain/certificate state must be checked without bypassing
TLS validation or weakening security.

The Windows executable is unsigned. Verify source/checksum and scan downloads;
never advise disabling security or installing unknown drivers. Performance
depends on hardware, settings, location and combat load; do not reuse old-build
FPS numbers or promise locked 60 FPS. No full human/controller playthrough is
implied by bounded automated tests.
