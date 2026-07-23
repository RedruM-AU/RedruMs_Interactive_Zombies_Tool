# Changelog

All notable changes to RedruM's Interactive Zombies Tool are documented here. See [Releases](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases) for full download links.

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
