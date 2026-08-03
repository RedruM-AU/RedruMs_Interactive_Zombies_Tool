# Changelog

All notable changes to RedruM's Interactive Zombies Tool are documented here. See [Releases](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases) for full download links.

## [2.5.8] — 2026-08-03
**Fixed:** keybinds now work immediately after installing, on any game. Previously you had to open the app and click Save at least once before they'd actually work in-game. If you were affected by this on an older version, this update fixes it automatically too, no extra steps needed. Also fixed a couple of small display bugs in Setup & Diagnostics for BO1 (T5).

## [2.5.7] — 2026-08-01
**Fixed:** the Spotify now-playing overlay was permanently showing "—" instead of the actual song, even with Spotify open and playing — it was filtering candidate windows by checking for the word "Spotify" in the title, but the title only contains that word while paused/idle, not while a track is actively playing. Now matched by the window's owning process instead, so it works correctly regardless of what the title bar currently shows. Follow Reward / Like Reward dropdowns on the Settings tab weren't updating to match your active game profile on app launch — they'd keep showing the previous game's actions until you manually reselected a game from the dropdown. OBS overlay files for uptime, likes-per-minute, last gift, last spin, last follow, and the chat feed were only ever created the first time their event actually happened, so you couldn't set up an OBS source for one of those without triggering it first — all overlay files now exist with placeholder values the moment the overlay is turned on.

## [2.5.6] — 2026-07-31
**New:** the Gift Routing Matrix's gift name field is now a searchable dropdown pulled from TikTok's real gift catalog, grouped into diamond-value tiers, instead of free-text typing — no more gifts silently not triggering because the typed name didn't exactly match. Gifts are now matched by their actual TikTok gift ID rather than name, which also correctly handles gifts that share a display name across different price tiers. If a live gift arrives that isn't in the cached catalog yet, it's automatically learned and added as a permanent dropdown option. Added a per-row "Test" button that fires a gift's configured action on demand — including the same Plutonium accumulation-timer delay a real gift would go through — so you can verify a gift is wired up correctly without waiting for a real one or going live. Added `+100/-100`, `+250/-250`, `-500`, and `+2500/-2500` point actions for BO2 (T6) and BO1 (T5), shipped with no default key so they don't collide with your existing binds — assign a key to any you want to use. Binding an action to `F10` or `Home` on T5/T6 now shows a warning, since Plutonium reserves those for its own menus and may intercept the key before your bind fires.

**Fixed:** BO1 (T5) GSC updates now reach an already-configured install automatically on save, the same way BO2 (T6) already did — previously T5 required manually re-exporting the GSC from Setup & Diagnostics to pick up any GSC-side change.

## [2.5.5] — 2026-07-31
**Fixed:** rebinding an action to a new key no longer leaves the old key still bound in-game alongside it — both the BO3 and Plutonium (T5/T6) exported `.cfg` files now correctly unbind keys you've moved away from, instead of only unbinding a fixed list of keys from old app versions. The `=` key wasn't reliably registering as a keypress in Plutonium for some users (affecting the T5 default "3rd Person 15s" bind and anyone using `=` for Wheel Spin) — sent via a more reliable input method now, matching the fix already in place for the navigation-cluster keys. Fixed the Give All Perks / Take All Perks icons piling up on screen on T5 (BO1) when used repeatedly — already fixed on T6 (BO2), now applied to T5 too.

**Changed:** Action Binds names for T5/T6 (BO1/BO2) are now locked — only the key can be changed, and the "Add Action" button is disabled for those games. Action commands are hardcoded into the GSC script for BO1/BO2, so renaming or adding a row never actually did anything except look like it should; this was a source of recurring confusion in the Discord.

## [2.5.4] — 2026-07-30
**New:** the on-launch "LOADED" in-game message is now a centered, two-line HUD banner (title + "LOADED - redrumtools.com") instead of the old top-of-screen text, and no longer shows a version number. Tooltips now clamp correctly to whichever monitor the cursor is actually on, instead of only ever using the primary monitor's bounds. Added per-section "Reset Section" buttons for Action Binds, Wheel Spin Pool, and Gift Routing Matrix, so each can be reset independently without touching the other two.

**Changed:** the first-launch scam-warning popup now points to [redrumtools.com](https://redrumtools.com/) instead of the GitHub repo, and mentions reporting scammers via the Discord server as well as TikTok DM.

**Fixed:** the installer's BO3 directory checkbox no longer defaults to checked with a guessed path — it now auto-detects BO3 the same way the T5/T6 pages already did, so users who only use Plutonium no longer hit a "folder not found" prompt during setup. The installer now also overwrites the live GSC file in Plutonium's scripts folder on every install instead of only the first — previously, updating over an existing install left the old GSC in place until manually re-exported from Setup & Diagnostics.

## [2.5.3] — 2026-07-27
The official website is live at [redrumtools.com](https://redrumtools.com/) — download links, feature breakdown, screenshots, and setup steps for all three games in one place, replacing the old Linktree. A Website button has been added to the Dashboard alongside Discord and Support the Developer.

**New:** Website button on the Dashboard, linking to [redrumtools.com](https://redrumtools.com/).

**Fixed:** launching the app while it's already running (even minimized to the system tray) now brings the existing window to the front instead of showing an "already running" popup.

Free forever. Report scammers reselling this tool: TikTok DM [@redrum.au](https://tiktok.com/@redrum.au) or the [Discord server](https://discord.gg/VFeZVGtBA7).

## [2.5.2] — 2026-07-26
Spotify now-playing overlay and Plutonium (T5/T6) reliability fixes.

**New:** OBS overlay expanded with coin total, last follower, rolling chat feed, and Spotify now-playing (read straight from the desktop app's window title — no API keys or extra setup).

**Fixed:** actions bound to Delete/End/Home/Insert/Page Up/Page Down/arrow keys (e.g. Random Weapon) could silently fail to fire, game window now focuses before every T5/T6 action instead of just BO3, T5/T6 detection switched to window-title matching for reliability, false "game window not found" log message when focus was already fine, Export Binds button showing the wrong button for the active game, T6 GSC auto-save silently failing to write due to a stale path.

Free forever. Report scammers reselling this tool: TikTok DM [@redrum.au](https://tiktok.com/@redrum.au) or the [Discord server](https://discord.gg/VFeZVGtBA7).

## [2.5.1] — 2026-07-26
Discord link fix and dashboard polish.

**Fixed:** old Discord invite link had expired — replaced everywhere.

**Improved:** wider TikTok username field, bigger Discord/Support the Developer buttons, Clear Tracker Metrics moved next to session stats for quicker access.

**Removed:** TikTok API Health Check tool in Setup & Diagnostics — unreliable and rarely useful.

Free forever. Report scammers reselling this tool: TikTok DM [@redrum.au](https://tiktok.com/@redrum.au) or the [Discord server](https://discord.gg/VFeZVGtBA7).

## [2.5.0] — 2026-07-23
The biggest update yet — live stream overlays, 20 achievements, a new Settings tab, 20 themes, and major stability fixes.

**New:** OBS overlay support, 20 achievements, lifetime top gifters leaderboard, smarter/expanded TTS (stack reactions, streak callouts, hourly callouts, rare spin lines), dedicated Settings tab (audio/TTS, cooldowns, events, rewards, appearance, behavior, advanced tuning, backup), 20 themes with custom accent colours, TTS voice picker, font size scaling, click-to-set key capture, action search, one-click add for unmatched gifts, live session uptime/likes-per-minute readout.

**Fixed:** reconnects no longer go deaf to all events, T6 GSC was shipping an outdated script, Plutonium bind exports were missing Wheel Spin/Map Restart and could overwrite working binds, Clear Tracker Metrics didn't reset the like reward counter, reconnect counter now resets per session, config saves are now crash-safe with automatic backup recovery.

**Improved:** opens maximized with a dark title bar and app icon, sharp text on scaled displays, cleaner dashboard layout, zebra-striped tables, resizable Keys & Binds panels, labeled progress bars, cursor-following tooltips, Demo Mode simulates the viewer counter, installer asks whether to keep settings on uninstall, Defender exclusion is an opt-in checkbox, smaller installer.

## [2.4.1] — 2026-06-17
Demo Mode — simulates a full live session without TikTok, for testing your setup or recording showcase footage. Discord community server launched. Fixed theme not restoring correctly on launch.

## [2.4.0] — 2026-06-16
Custom BO3 Actions builder in Setup & Diagnostics — add any Sphynx console command as a new action with live bind preview, no manual cfg editing. Collapsible sections for prerequisites and settings backup. Support the Developer / Ko-fi buttons added. System tray improvements. Fixed reward dropdowns reading stale defaults, ghost entries after deleting rows, remapped keys being ignored by Timescale Reset and 3rd Person.

## [2.3.2] — 2026-06-16
Bug fix patch: reward dropdowns not populating with custom action names, ghost entries after row deletion, remapped Timescale/3rd Person keys being ignored, theme switcher needing multiple clicks to fully apply.

## [2.3.0] — 2026-06-15
New Stats tab — session history, personal bests, lifetime totals, new-record toast notifications. New T6 actions: Give Wonder Weapon (map-aware, anti-repeat) and Spawn Boss (map-aware). Toast notifications, animated launch button, minimize-to-tray toggle, single-instance lock, window position memory, 15 themes.

## [2.2.2] — 2026-06-12
New T6 actions: Red Light Green Light, Teleport Random, Spawn Zombies, Freeze Controls, Drunk Mode, Remove All Points. Fixed perk-removal HUD icons not clearing, Teleport Random using unreliable spawn points, incomplete Skip Round transitions. Live viewer counter, spin history with username, chat feed cap, reconnect TTS alert.

## [2.2.1] — 2026-06-11
New BO3 actions: God Mode Timer, Spawn Zombies, Spawn Special Zombie, Infinite Ammo, Teleport Random, Points Reset, Take All Weapons. T5/T6 gift queueing so wheel spins and gift accumulation never overlap. Tooltips added across every tab. Smart Scan rewritten for Plutonium.

## [2.2.0] — 2026-06-10
Full T5 (BO1 Plutonium) support — 24 actions, custom GSC, weighted wheel spin with slot machine animation. New BO3 and T6 actions. BO3 keybinds reorganised into F-key groups. TTS coverage expanded to all three games with milestones up to 25,000 likes.

## [2.1.1] — 2026-06-06
Live dashboard stats — viewer counter, session stats strip, session summary popup. Configurable like rewards and bonus spin threshold. Dashboard redesign; TTS response pools moved to their own file. Connection stability fixes.

## [2.1.0] — 2026-06-06
Complete keybind system redesign with auto-write on save. Update checker, settings backup & restore, version-aware config migration. Key conflict detector, path status indicators. New BO3 and T6 actions. Multiple stability fixes.

## [2.0.0] — 2026-06-04
Major platform expansion — added T6 (BO2 Plutonium) and T5 (BO1 Plutonium) as full game profiles. Introduced the Action Bind Architecture: one Action Binds panel driving the spin wheel, gift matrix, and cfg export. Installer path collection, keybind drift detector.

## [1.0.1] — 2026-05-28
First public release. Black Ops 3 only. TikTok LIVE integration, gift routing, `!spin` command, weighted chaos wheel, TTS, gifter chat reading, like-based rewards, auto-reconnect, cooldown management, `binds.cfg` exporter.
