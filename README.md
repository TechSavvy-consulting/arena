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
Transit Sentinel and Lab Ravager cards as requested. Tight thumbnail framing keeps characters
close, while image viewers retain the full originals. The six arena previews
show populated scenes captured in the current v2.1.0 game. These are staged
real-engine scenes, not human playthrough claims. A prominent download
callout highlights extracting the folder and launching TechSavvyArena.exe. The
header and favicon use the existing TechSavvy headset-head logo, not the game
icon. Previously published unused media is retained for rollback.

The homepage hero uses Kyle's supplied full cast picture, unchanged. It fits
without cropping; the original 30 WAVES TO MAKE IT COUNT badge sits in a
separate footer strip below the art so it cannot cover any character.

The active gameplay/map/character screenshots and the personalization screen
come from TechSavvy Arena v2.1.0 under `assets/v21/`. Character close-ups and encounter shots
are staged in-engine capture fixtures, not AI-painted gameplay or human
playthrough claims. There is no video player. The separate illustrated character posters are the same
approved artwork used inside Pause → Characters. `assets/v21/media-manifest.json`
records capture names without private absolute paths and SHA-256 hashes.

Screenshot/media capture tools live outside this public repository under the
task-specific Codex Temp directory. Only final, approved media is published.

## Local face personalization

The v2.1.0 update preserves the existing website design, supplied hero,
30-wave badge, gallery roster and extraction callout. A compact feature card
and expandable instructions explain Happy plus optional Focused/Angry photos,
preview before Apply, a named local people gallery, switching by portrait,
Save name, Restore Kyle and confirmed deletion of only the selected person.
Adding a person keeps existing profiles; campaign progress and settings remain
shared. One-photo expressions are approximate and can
retain the smile; this is not a 3D scan. The public demonstration uses Kyle.
No private player or family photos, face profiles or originals are published.

## Current release and compatibility

The current download is `TechSavvy-Arena-v2.1.0.zip`, 886,404,014 bytes
(886 MB decimal), hosted as a GitHub Release asset. Visible branding remains
**TechSavvy Arena**. This rebuild has six connected, two-to-three-floor
facilities, thirty encounters, power/security/cache objectives, eighteen local
tracks across six music stations, and the existing five weapons/eight uncapped
upgrade benefits. It is still offline and single-player.

The how-to-play section reflects v2.1.0 input prompts, toggle sprint, direct
weapon keys, checkpoint arrivals/objectives and saved view restoration.
Source references checked: `arena_rules.gd`, `expedition_layouts.gd`,
`campaign_radio.gd`, `arena_ui.gd`, `main.gd`, `facility_save.gd`,
`project.godot`, and `BUILD-v2.1.0.md` in the private game project.

The rebuild uses separate `TechSavvyArenaCampaign2` local user data.
It does not silently import saves/settings/private portrait libraries from v1.x
or earlier.
Existing v2.0 campaign checkpoints remain supported. The page advises extracting
to a new folder and retaining older games. The compact Previous versions section
links historical releases; older builds can share local storage, so it warns
against treating separate installation folders as separate save slots.

The compact historical selector uses `assets/build-history.json`: 16 older full
releases, two short previews and the explicitly unshipped v0.6.1 experiment.
v0.11.0 and v0.13.2 keep their existing public URLs; the other unchanged portable
ZIPs are assets of the `build-history` release. These recovered archives were
checked for integrity/distribution contents but were not newly playtested.
No raw source snapshots or private runtime files are published. Six additional
upper-route room images are available from the arena panel without adding
another long gallery.

Performance limitations are disclosed, not marketed as smooth 60 FPS:
final packaged 1080p Balanced fourteen-enemy pursuit tests averaged 36–49 FPS
across the six maps on the RTX 4060 Laptop test machine; extreme synthetic
combat averaged 24–31 FPS and hit brief hitches. These are bounded fixture
results, not universal minimum requirements or a controlled before/after result.
Crowded view obstruction remains possible. No physical-controller or complete
human-playthrough test is implied by the website.

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
