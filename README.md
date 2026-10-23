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

## v2.6.0 release

Current package: `TechSavvy-Arena-v2.6.0.zip`.
Release URL: https://github.com/TechSavvy-consulting/arena/releases/tag/v2.6.0
Verified archive: 1,309,169,463 bytes (1,309 MB decimal), SHA-256
`97c33b006b08b24542fc5ccc9e58b583af51071abe4f44ecfe13ce260ea1e2f3`.
Package source commit: `425f609abd70274f2537a332b68e9b23a1f63e9f`.
The unchanged, tested EXE/PCK were exported from code commit `f75f2c9`; later
packaging, documentation and external capture changes do not alter their bytes.
PCK SHA-256: `a74da2c37c95a18a7bb264fddc30ebe96bbf86e7a44c8dff1c3af509ed4317ce`.
The current release metadata is also recorded in `assets/build-history.json`.

The full six-facility/thirty-encounter game retains five guns, eight uncapped
upgrade benefits, Easy/Normal/Hard, eighteen tracks across six offline music
stations, checkpoints and offline named face profiles. The full-roster native
character art covers twelve ordinary enemies, six guardians and six champions.

New in this release:

- Six larger furnished signature halls, each with two separated stair routes
  and connected upper galleries. New industrial props use licensed CC0 assets
  from Kenney and Poly Haven, with provenance included in the game package.
- Ammo crates and supply cases collect on approach or the existing Interact
  button with a clear path on the same floor. Feedback reports the collected
  amounts, and repeatable stations show their 30-second recharge countdown.
- Optional caches refill reserves and add 10% of the upgraded reserve target,
  plus an extra grenade. Collected ammo and grenades remain uncapped; ordinary
  ammo consumption, reloading and magazine limits remain unchanged.
- Every tenth eligible enemy ammo drop becomes a grenade. Health drops,
  automatic salvage, crates and stations do not count toward that substitution.
- Existing v2.4/v2.5 checkpoints preserve encounter progress and inventory,
  with safe placement for the changed room layouts.

The v2.5 travel pursuers, immediate room-control encounters, independently
smoothed compass, five settings pages and LLC credits are retained. Passive
grenade regeneration still targets five without removing collected excess.

Keyboard Shift defaults to hold sprint; controller L3 toggles sprint. R3 means
clicking the right stick for melee, not moving it. Automatic prompts follow the
last input. DS4Windows virtual Xbox 360/XInput output is the supported controller
path. Physical-controller testing is not implied by scripted checks.

## Current media and provenance

The unchanged v2.5 media remains in `assets/v25/`: home, pause, upgrades, victory,
personalization, options hub and all five category pages; six primary and six
alternate facility views; twenty-four background-free character portraits;
and a social preview. Retain earlier assets for recoverability.

The twelve current primary/alternate images in “New arena. New problems.” use
`assets/v26-locations-lit-20261023/` and its `location-manifest.json`. They photograph
the immutable final v2.6 PCK's six halls and upper galleries with staged native
enemies and three temporary shadowless website-only photo lights. Soft front/side
fill makes faces and armor readable without raising the sky exposure. These are
not live gameplay-lighting evidence, AI redraws or retouched faces. The released
game, its lighting settings, package, download, saves and profiles are unchanged.
The darker original v2.6 set remains in `assets/v26-locations-20261023/` for rollback.
The prior October 22 location set in `assets/v25-locations-20261022/` remains
available for recoverability but is no longer the active arena gallery.
Menus and character portraits are retained v2.5 captures: those interfaces and
models are unchanged in v2.6, not freshly photographed for this release. Their
captions and the footer retain that provenance. The approved hero, social image
and welcoming-committee close-up are intentionally unchanged.

The six primary/upper-level pairs are:

- Foundry Complex: Foundry Casting Hall / Maintenance Gallery.
- Flooded Transit: Transit Freight Hall / Dispatch Gallery.
- Mutation Laboratory: Containment Arena / Observation Gallery.
- Flooded Research Complex: Water Treatment Hall / Dry Service Gallery.
- Sky Docks: Cargo Handling Arena / Logistics Deck.
- Alien Reactor Fortress: Reactor Combat Hall / Upper Reactor Gallery.

Root-run external tools photograph the exact final PCK using its supplied
SHA-256. Main runs in isolated test mode with owned disposable save/profile
fixtures; cast views use the actual native factory without Main or profile
storage. Fresh output directories preserve earlier evidence.

The new photo-lighting capture uses only the isolated native world and actor
builders, never Main or user data. Original cameras, geometry, materials, bakes
and verified enemy positions are retained. Five actors appear in each floor view;
the galleries retain five except Laboratory four, Sky Docks three and Reactor four.
Natural rails still cover some lower bodies. The original placement-suite failures
remain in the earlier manifest; this separate pass verifies the retained layout,
head sightlines, PCK identity and new pixels, not live combat or five actors in
every gallery. Separate prior compiled combat checks exercise AI/player movement.
Retained v2.5 menu progress is a fixture, not a human playthrough. Portraits use
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

v2.6 keeps the exact v2.4/v2.5 application-data identity:
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
separately labeled previews and experiments. The former current v2.5 download is
now the first historical record, preserving its exact file, bytes, SHA-256,
source commit and URLs. All twenty-two older records remain unchanged beneath
it. No remote release/asset deletions are approved by the retained-all decision.

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
