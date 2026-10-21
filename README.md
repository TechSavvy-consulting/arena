# TechSavvy Arena website

Public download/showcase website for Kyle Hearn's TechSavvy Arena.

Live URL: https://techsavvy-consulting.github.io/arena/

Buildless HTML/CSS/JavaScript, GitHub Pages from `main` root. The Windows game
ZIP is a GitHub Release asset, not part of this website's Git history. No game
source, raw photo references, player saves, credentials or private documents are
included. The website does not modify an installed game or its local data.

## Preserved design

The approved full-cast hero is unchanged, with its 30 WAVES TO MAKE IT COUNT
badge in a separate footer strip so it cannot cover characters. The header and
favicon retain the TechSavvy headset-head logo. There is no video player or
Watch the Game button. Keep one combined character gallery, obvious arena
selector buttons, the prominent extract-and-launch callout, local face guidance
and the compact expandable version history.

## Current v2.2.0 media

Current menu, arena and background-free character images live in `assets/v22/`:
home, upgrades, pause, options, personalize, victory, social preview; six primary
and six alternate arena views; eight ordinary enemies, six guardians and six
named champions. Twenty native character captures are retained; the curated
gallery displays nineteen cards (eight ordinary enemies, six guardians and five
champions). Captures use only the public default Kyle, never private player/family
portraits or local face profiles.

The “Meet the welcoming committee” tile deliberately reuses the approved
original in-game close-up at `assets/boss-3.webp`, as requested by Kyle. Its
enlarged view uses that same image. The current character gallery stays on v2.2.

Arena scenes are staged in the actual v2.2 game, not a human-playthrough claim.
The twelve views show these real room pairs:

- Foundry Complex: Furnace Gallery / Crane Workshop.
- Flooded Transit: Flooded Platform / Dispatch Room.
- Mutation Laboratory: Containment Hall / Observation Room.
- Flooded Research Complex: Sample Archive / Water Treatment.
- Sky Docks: Launch Chamber / Sky Control.
- Alien Reactor Fortress: Reactor Heart / Coolant Injection.

Twenty character views show actual game models in a transparent studio viewport
with portrait lighting. They are not gameplay screenshots or AI redraws. CSS
supplies the neutral backdrop; contain-fit images preserve faces and wide limbs.
Foundry Enforcer and Transit Sentinel return because v2.2 gives them distinct
new bodies, not the previous redundant forms. Lab Ravager remains off the page:
its thumbnail is still too similar to Research Executioner, though its native
capture is retained. Sniper, Grenadier, Stalker and Squid cards remain omitted.
Names match the shipped game. The twenty historical downloads below are a
separate count and remain unchanged by this character-gallery curation.

The two separate cast posters are the approved illustrations also available in
Pause → Characters. They are not evidence of real-time graphical fidelity.
Existing older public media remains available for rollback; current gallery
paths reference v2.2 assets. Capture tools and source evidence remain outside
this public repository. Only final approved media belongs here.

## Release and controls

Current download: `TechSavvy-Arena-v2.2.0.zip`, 890,155,812 bytes (890 MB decimal).
Release URL: https://github.com/TechSavvy-consulting/arena/releases/tag/v2.2.0

Visible branding stays **TechSavvy Arena**. The offline, single-player game has
six connected multi-floor facilities, thirty encounters, five guns, eight
uncapped upgrade benefits and eighteen tracks across six local music stations.
v2.2 adds distinct room architecture and creature silhouettes, a walkable-route
compass, physical power/security mechanisms and committed champion attack cues.
The site's guide describes route/stairs cues, the optional compass, actual
nearby interaction controls and explicit CHECKPOINT SAVED confirmation.

Keyboard sprint defaults to holding Shift, with Toggle available in Options.
Controller L3 remains toggle; R3 means clicking the right stick for melee
(65 damage), not moving the stick. Automatic prompts follow the last input.
Slider changes preview immediately and drag settings save on release; the mouse
wheel scrolls Options without accidentally changing a slider.

Source references checked in the private game project: `CONTROLS.txt`,
`README-CAMPAIGN2.txt`, `arena_rules.gd`, `main.gd`,
`champion_encounters.gd` and current world/capture metadata. A physical PS4
controller test is not implied by source or synthetic-input checks.

## Compatibility and private personalization

v2.2 retains the v2.0/v2.1 local data folder, checkpoint format, settings and
saved-people library. Older-layout checkpoints relocate to a safe arrival for
the saved encounter while preserving progress and upgrades. Do not delete local
data to update. Extract into a new game folder and back up saves before switching.

v1.x/original Arena/Reactor-preview data remains separate and is not silently
imported. Adding or selecting a local face profile does not create another
campaign save slot. Happy plus optional Focused/Angry photographs, preview before
Apply, Save name, gallery switching, Restore Kyle and confirmed deletion are
described in the existing compact card and expandable guide. One-photo
expressions are approximate and can retain the smile; this is not a 3D scan.
No face processing, photo upload, account or analytics service is added here.

## Performance boundaries

Final packaged 1080p Balanced tests on the RTX 4060 Laptop machine averaged
40–49 FPS across six guardian rooms with fourteen pursuing enemies. Artificial
same-frame death/replacement stress averaged 25–32 FPS with hitches. These are
bounded workloads, not whole-campaign measurements, guaranteed minimum specs,
a controlled speedup comparison or a locked-60-FPS promise. Hardware, room and
combat load affect performance. No complete human playthrough is implied.

## Previous builds

`assets/build-history.json` contains twenty older downloads: seventeen full
releases, two short previews and the explicitly unshipped v0.6.1 experiment.
v2.1.0 is the first entry and retains its existing release URL, 886,404,014-byte
archive and SHA-256
`9456684fd2cfefc03ff79956713ec26679587fc1628da96399eebc30f3d7c96d`.
All nineteen older records retain their original URLs and hashes.

Historical packages were checked for archive integrity/distribution contents,
not newly playtested. Separate installation folders do not necessarily mean
separate save storage. The page warns against overwriting old installs or
assuming save interchangeability.

## Updating and publishing

1. Verify the game package and notices; exclude saves and private profiles.
2. Publish its ZIP, release notes and checksum as GitHub Release assets.
3. Confirm every current media path, version, size, room name and download URL.
4. Run local content/link checks and desktop/mobile browser review.
5. Push `main`; wait for Pages and verify live HTML, media and release download.

The root task handles publication. Source edits alone are not proof of a live
deployment. Do not publish a new screenshot path before its final asset exists.

## Notices

Created for and featuring Kyle Hearn. TechSavvy Consulting. Development with
Codex. Game and third-party asset notices ship with the Windows download.
DS4Windows, DualShock, PlayStation, Windows and Xbox are third-party names;
this independent game is not affiliated with their manufacturers.

The executable is unsigned. Do not advise disabling Windows security or
installing unknown drivers. GitHub operates the hosting platform. No account,
analytics or external web-font service is required by this website.
