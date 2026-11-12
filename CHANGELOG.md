# Changelog

Community patch notes for RedruM's Interactive Zombies Tool.

## [2.8.0] - 2026-11-12

Refreshed 13 November 2026 with the updated installer, Setup flow and Live controls.

### Interface refresh

- Setup shows when to start a match, how to load binds, and what to look for in the Max Ammo test. Confirm the result in-game to mark Setup complete, then continue to TikTok.
- Live uses clearer game file statuses. The RedruM theme uses teal for Connect, and unchecked boxes and Solarized Light selections are easier to see.
- Setup highlights the next step and moves export and bind checks under Advanced tools.
- Live highlights Connect to TikTok and shows game and connection readiness.
- Simplified gift details and appearance settings, refreshed icons and controls, and added achievement cards with progress.

### Desktop and dashboard

- Rebuilt the Windows desktop app in Qt with refreshed Live, Setup, Actions & Gifts, Settings, Diagnostics, Stats and Help pages.
- Added a sidebar, compact icon navigation and top tabs. Layout, text size, window position and theme persist between launches.
- Preserved the 22 existing palettes and custom accents. Grouped themes by colour and style, refreshed the dark colour palettes, and added RedruM, Aether, Afterglow, Deep Sea, Midnight Blue, Aurora, Copper Dusk and Glacier gradients.
- Added English, Spanish and Brazilian Portuguese for the main controls and guided tour.
- Added a replayable first-launch spotlight tour, contextual tooltips and shortcuts to setup, support and update checks.
- Put Game next to Navigation and Theme. A live indicator shows when the selected game window or a different supported game is detected.
- Moved the TikTok username and connection controls onto Live. The username syncs with Settings and saves when connecting.
- Added a dedicated right-hand chat panel that moves into a tab in narrow windows and retains chat history while resizing.
- Reorganized activity, recent gifts, top gifters, recent spins, cooldowns, live counts, bonus spin progress and queue status.
- Added Website, Discord and Ko-fi links on Live. The optional tray menu can reopen the app, control the connection, mute speech or exit.
- Added `Ctrl+S` for Settings, Actions & Gifts and Setup, and compacted tables, spacing and empty states.

### Actions, gifts and testing

- Split Keybinds, Gift mappings and Spin wheel into separate per-game tabs with clearer editing controls and reset options.
- Added key capture and duplicate-key checks, including aliases. Setup compares the profile against exported and installed binds.
- Added a searchable gift catalog, import and refresh controls, gift IDs and aliases, and an option to map unmatched gifts from Live.
- Added action pickers for mappings and rewards. Custom console actions are available on BO3, and BO1 and BO2 list their built-in actions.
- The spin editor displays base desktop odds and identifies entries without an eligible bind.
- Manual Override accepts `!spin`, a mapped gift, an action name or a raw key. Setup can test Max Ammo, and the editors can test a selected bind or gift mapping.
- Demo runs sample events through the current profile. It can send game input after a three-second delay when enabled. Demo activity stays out of saved sessions and achievements.
- Game input starts enabled. Turn it off to preview or monitor events without sending keys to the game.
- Reworked action routing for gifts, follows, likes, chat spins and bonus spins, including gift streaks, caps, Plutonium batches and timed effect cleanup.
- The Windows sender checks the game window and process before sending keys. Optional autofocus can bring the selected game forward.
- Fixed detection and key delivery for BO3 Steam windows titled Call of Duty - ship.
- BO3 can use Wheel Spin as a follow or like reward using its configured spin effects.
- Live can monitor TikTok with game input off. Clearing dashboard totals leaves session history and reward progress intact.
- Gameplay settings group follow and like rewards, bonus spins, gifter and viewer cooldowns, batching, and effect timing.

### Setup, settings and records

- Setup discovers Steam and Plutonium folders and provides the right console command for each game.
- Saving a profile updates the app's configuration. Use **Install game files** in Setup to apply bind or script changes in-game.
- Save folders, Export game files and Install game files now confirm the result. Wrong destinations are highlighted with a warning before saving or installing.
- Game file installation keeps a backup of existing binds and scripts. On launch, the app offers updates for missing or outdated files in saved game folders and skips games that are running.
- The installer packages the new app. Compatible 2.7.0 settings, profiles, presets, stats and achievements carry over on first launch.
- Settings includes preset save/load, legacy imports, ZIP backup and restore, and recovery snapshots before a restore.
- TTS settings include voice, speed, volume, mute, a voice test and optional callouts for likes, gift streaks and session milestones.
- OBS text-file output includes an optional Spotify track display and a copyable output folder path.
- OBS text files now live in `%APPDATA%\RedruMTools\Desktop\overlay`. Existing OBS sources need to point to the new folder. Uptime and likes per minute are available in OBS text output.
- Stats includes session history, personal bests, all 20 achievements, JSON import/export and separate resets with recovery copies.
- Session summaries now appear in Live activity. Stats focuses on saved sessions, personal bests and achievements. The separate lifetime totals and lifetime top-gifters views from 2.7.0 are absent in 2.8.0.
- Diagnostics can copy a report with account names and paths omitted, or copy and save a session activity log.

### BO1 and BO2 Zombies

- Added a persistent dark red zombie counter and small translucent Redrumtools.com watermark.
- HUD position and colour can be set in Appearance, with matching options in the host-only `say !redrumhud` menu for the current match.
- BO2 Round 50 and Round 100 now add that number of rounds on every trigger, including back-to-back requests.


## [2.7.0] — 2026-11-11

## ⚠️ Updating?

Close the tool and run the installer over your existing copy. Your settings, binds, presets and stats carry over. The first launch backs up your saved data.

## ✨ New

- **Clear Pending Actions** cancels queued work.
- The Dashboard shows waiting actions, keypresses and gift batches.
- Hover tips explain the live controls, gift status and Demo Mode.
- Two new themes in Settings, **Slate Teal** and **Ember**.

## 🎨 Improved

- Cleaner Dashboard with clearer **Start Live** and **Stop Live** controls.
- Better handling of busy gift bursts, queued speech and timed effects.
- Settings backups include nested presets. Uninstalling keeps saved data.

## 🛠️ Fixed

- Total Likes now updates with bonus spins turned off. The progress bar shows when bonus spins are off.
- Old keys could still trigger bot actions after you changed or removed a bind.
- Reconnecting could replay old `!spin` commands and cooldown announcements.
- Some gifts could be missed or counted incorrectly during streaks.
- Temporary effects could reset early or fail to reset when the bot stopped.
- BO1 and BO2 third-person mode could trigger again when its timer ended.
- BO1's Random Weapon Upgraded bind could do nothing.
- BO1 and BO2 could restore default wheel effects when every effect was disabled.
- Save now tells you which game files could not be updated.

After updating, save your configuration and reload your binds in game. If you updated a BO1 or BO2 GSC script, restart the map.

| Game | Console command |
|---|---|
| BO3 | `/exec binds.cfg` |
| BO2 | `exec bot_binds.cfg` |
| BO1 | `exec pluto_t5_binds.cfg` |

Free forever. Report issues in [Discord](https://discord.gg/VFeZVGtBA7) or DM [@redrum.au](https://tiktok.com/@redrum.au).

---

## [2.6.2] — 2026-08-08
**New:** BO2 (T6) Give All Perks and Take All Perks now include Electric Cherry and Vulture-Aid, map-aware so they only show up on the maps that actually have them (Electric Cherry on Origins, Mob of the Dead and Tranzit Diner, Vulture-Aid on Buried). A Save button has been added directly to the Settings tab. The guided tour now opens with a short intro explaining what the app actually does before walking through the tabs, the Dashboard steps now follow the order you'd actually set things up in (username, game profile, launch button, then status), and two new steps cover Audio & TTS and the Events toggles in Settings.

**Fixed:** the Save confirmation popup now shows the actual file path your binds and GSC files were written to, not just the filename, for BO3, BO2, and BO1 alike. Previously it just said "updated" without saying where, which was the single biggest cause of "my binds aren't working" reports, and BO1's popup didn't even mention its GSC file at all.

## [2.6.1] — 2026-08-07
**New:** A first-launch guided tour walks new users through the app, highlighting the Dashboard, Keys & Binds, Settings, Setup & Diagnostics, and Stats tabs with short descriptions and Next/Back/Skip controls. It shows automatically the first time you launch, and can be replayed anytime with the new Show Tutorial button on the Credits & Info tab.

**Fixed:** closing the "this is a free program" welcome popup using the window's X button instead of the "Got it" button used to skip saving your "Don't show this again" choice, so it could keep popping up on future launches even after you'd already dismissed it. Now works the same way regardless of how you close it.

## [2.6.0] — 2026-08-07
**New:** BO2 (T6) has three new actions: Give One Perk, which randomly gives you a perk you don't already have, plus Round 50 and Round 100 for jumping straight to a specific round. BO2's Powerup Rain now drops twice as many powerups (20 instead of 10) over a longer window. The in-game "LOADED" banner stays on screen longer, the website link now gets its own animated row instead of sharing a line with "LOADED", and "LOADED" now flashes white and green.

**Fixed:** the app could freeze completely if certain Settings fields were left empty or set to 0, and Save or Launch could silently do nothing under the same conditions, both now handled safely. Wheel Spin animations could visually overlap or glitch when triggered close together, whether from a gift combo, a Like Reward, or a Follow Reward, now they queue up and play one after another properly on both BO1 and BO2. BO2's Wheel Spin and Red Light Green Light could visually clash if triggered around the same time. BO2's Powerup Rain could sometimes fire way more powerups than intended from a single gift combo. If you had both BO1 and BO2 already set up and switched between the two games in the app, only whichever one was currently selected would get its GSC file kept in sync on save, leaving the other one silently out of date, both now stay in sync regardless of which game is active. BO2's Wheel Spin pool was missing the newer point actions and still had an old, more limited "Free Perk" option, now replaced by the new Give One Perk, and Wheel Spin itself has moved into the Events section next to Red Light Green Light and Spawn Boss, where it belongs. Exporting the BO1/BO2 GSC file now double checks the file on disk actually matches what was just written and warns you if it doesn't, instead of just assuming the write worked, in case antivirus or another tool on your PC reverts it right after. BO1 (T5) game detection could fail to recognise the game was running after a Plutonium update changed the window's title text capitalisation, since the check was case sensitive, now matches regardless of capitalisation. The GSC export folder picker now opens directly at your Plutonium scripts folder instead of wherever Windows last left it, so there's less chance of accidentally saving to the wrong place. Preset names with unusual characters could silently fail to save while still showing a success message. Fixed a handful of stability issues that could occasionally cause a freeze or crash during busy moments on stream, like gift bursts. The Live Activity Log could grow without limit over a very long stream and gradually slow the app down. If antivirus quarantined part of the install, the app now shows a clear message instead of a confusing technical error. A large batch of smaller reliability, stability, and consistency fixes throughout.

## [2.5.9] — 2026-08-05
**Fixed:** the app could lose track of your session stats and viewer cooldowns if your stream disconnected and reconnected mid-broadcast, now only resets on a real fresh start. The Top Gifters leaderboard didn't actually reset on a new connection, so it could carry over totals from a previous session. Settings could get corrupted if the app closed unexpectedly right after launching. Timescale, 3rd Person, and Infinite Ammo could interrupt each other or fail silently when triggered close together. On BO2/BO1, some actions (like rewards, follow rewards, bonus spins, chat spins) could miss the game window if you'd tabbed away, now they focus the game first like gifts already did. Renaming a custom BO3 action could silently break its keybind, so action names are locked once created, same as BO2/BO1. Exporting binds.cfg for BO3 didn't remove keys you'd already rebound away from, so an old key could stay active in-game alongside the new one. The Custom BO3 Actions builder could be used while on BO2/BO1, where it never actually worked, it's now BO3 only. Fixed BO2's Random Weapon and Give Wonder Weapon sometimes not giving a weapon properly, including one case that could leave you with nothing in hand, and Ray Gun Mark II showing up on maps it shouldn't. BO1's Wheel Spin now actually respects your enabled/disabled effect list in-game instead of only affecting gift/chat spins. Fixed BO1's Pack-a-Punch Upgrade taking your weapon away if used a second time on an already-upgraded gun, and PAP Downgrade giving the wrong weapon back for a couple of guns. Restored some TTS lines that were accidentally never playing, including the special callouts for 15,000/20,000/25,000 like milestones. A handful of smaller reliability and consistency fixes throughout.

## [2.5.8] — 2026-08-03
**Fixed:** keybinds now work immediately after installing, on any game. Previously you had to open the app and click Save at least once before they'd actually work in-game. If you were affected by this on an older version, this update fixes it automatically too, no extra steps needed. Also fixed a couple of small display bugs in Setup & Diagnostics for BO1 (T5), and an error that could show up if refreshing the gift catalog failed.

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
