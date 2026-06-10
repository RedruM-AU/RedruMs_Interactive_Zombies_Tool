# RedruM's Interactive Zombies Tool

**Version:** 2.2.0 &nbsp;|&nbsp; **Developer:** RedruM &nbsp;|&nbsp; **Free & Open Access**

---

## ❓ What Is This?

RedruM's Interactive Zombies Tool connects your TikTok LIVE stream directly into Call of Duty Zombies. Everything your viewers do — likes, gifts, and chat commands — affects your game in real time.

- **Likes** give points and trigger bonus spins at milestones
- **Gifts** trigger in-game actions instantly
- **`!spin`** gives a random weighted effect from your custom wheel
- Every **5,000 likes** fires a bonus random spin

It turns your TikTok stream into a fully interactive Zombies experience across three games.

<img width="1202" height="922" alt="First launch" src="https://github.com/user-attachments/assets/9f83a264-230e-4ff4-91a3-f2a6358f2daf" />

---

## 🎮 Supported Games

| Game | Platform | Status |
|------|----------|--------|
| Black Ops 3 Zombies | Steam | ✅ Full Support |
| Black Ops 2 Zombies | Plutonium (T6) | ✅ Full Support |
| Black Ops 1 Zombies | Plutonium (T5) | ✅ Full Support |

The app detects which game is running automatically and switches to the correct profile. Each game has its own independent configuration — spin effects, gift binds, and weights are stored separately and restored when you switch back.

---

## ⚡ Feature List

### Core
- Real-time TikTok LIVE integration (likes, gifts, follows, comments)
- Priority keypress queue with overflow protection
- Auto game detection via process scanning every 5 seconds
- Per-game profile system with instant switching
- Per-game configuration persistence — customisations saved independently per game
- Auto-reconnect on TikTok API drops with reconnect counter
- System tray support — minimise to tray, restore or terminate from icon

### Keys & Binds — Action Bind Architecture
- **Action Binds panel** — single source of truth for every keybind, grouped by category
- Change a key once in Action Binds — spin wheel, gift matrix, and cfg export all update automatically
- No more sync issues between gifts and spin effects
- **Wheel Spin Pool** — select which actions appear on the wheel and set rarity weights
- **Gift Routing Matrix** — map any TikTok gift to any action by name; key resolves automatically
- New actions added in updates merge automatically without losing customisations
- Reset to Defaults per game — one click, only affects the selected game

### Interaction
- Weighted spin wheel with anti-repeat buffer
- BO3 gift action types: Direct Key Bind, Wheel Spin, 3rd Person 15s, Random Timescale, Powerup Rain, Random Powerup
- T5/T6 gift action types: Direct Key Bind, Wheel Spin
- Gift stacking (up to 10x) with stack-specific TTS
- Per-user spin cooldowns — adjustable gifter and viewer cooldowns (default 3 min / 10 min)
- Live gifter tracking — gifters get priority cooldown and chat readout
- Like milestones: 1K, 2.5K, 5K, 7.5K, 10K and every 2.5K after — up to 25K with dedicated callouts
- +1,000 points every 1,000 likes automatically

### TTS
- Offline TTS via pyttsx3 — no internet required
- Action-based TTS — callout matches what actually happens in game, not just the gift name
- Per-effect rich TTS pools — 43+ specific effect callouts (e.g. "Rose from RedruM — Insta Kill!")
- Automatic effect name lookup from action binds — remapping updates TTS automatically
- Volume slider and instant mute toggle
- Separate Follow TTS and Gifter Chat TTS toggles
- Live audio gauge visualiser

### Configuration
- **Action Binds** — per-game action registry; name, key, and (for BO3) Sphynx command stored together
- Per-game spin wheel — action name and rarity weight per effect
- Per-game gift matrix — gift name, action dropdown, type combo, live receive counter
- Named preset profiles — save and load complete configurations by name
- Auto-save on launch and terminate
- Auto-write binds files on save — silently updates cfg files to known paths
- Paths remembered from installer wizard — no manual file management needed
- JSON config at `%APPDATA%\BO3TikTokBot\config.json`
- New profile actions merge automatically on version update

### BO3 Binds Export
- Fully dynamic — reads keys from Action Binds panel, commands from profile
- Change any key and re-save — exported cfg reflects it immediately
- No hardcoded sections — every bind line is generated from your live configuration
- 34 actions including points, powerups, weapons, perks, ammo, chaos effects, round controls, and new God Mode Timer and PAP Upgrade
- All Sphynx commands verified against the official command list

### Plutonium GSC Integration (T6 / T5)
- Silent say-bridge — bot presses key → GSC catches `say !botcmd_X` silently, no chat spam
- **T6:** 20+ in-game actions — powerups, perks, points, weapons, timescale, PAP upgrade/downgrade, low gravity, aimbot timer, wheel spin
- **T5:** 22 in-game actions — full wheel spin with slot machine animation, God Mode, Teleport, PAP, perks, weapons, low gravity, bonus health
- 37-weapon random weapon deck (Fisher-Yates shuffle — all 37 before any repeat)
- In-game wheel spin — slot machine displayed on screen, lands and fires
- All in-game text displays in red

### Setup & Export
- Export Binds .cfg (BO3) — dynamically generated from current Action Binds
- Export Binds .cfg (Plutonium) — one `exec` command loads all binds permanently
- Auto-write on save — silently writes cfg files to installer-configured paths
- Export GSC (T6/T5) — confirmed working scripts exported directly from the app
- Open GSC Folder — opens correct Plutonium folder in Explorer, creates it if missing
- Smart drive scan — finds BO3 or Plutonium installation automatically

### Returning User Protection
- Version check on launch — detects update, shows What's New notice
- Config fully preserved across updates — keys, weights, gifts all intact
- New actions added to profiles merge automatically without resetting customisations
- Installer uses `onlyifdoesntexist` for GSC and binds files — never overwrites user edits

### Diagnostics
- Keypress emulator — 3-second countdown then fires a test key to verify permissions
- Sign API health check — pings TikTok's endpoint and reports online/blocked
- Session log — full timestamped activity feed, copy to clipboard for bug reports
- Reconnect counter — tracks API drops this session
- Keybind drift detector — warns on save if keys changed since last export
- Contextual tooltips on every major UI control

---

## 💡 Why I Made This

I originally created this tool because I wanted to run my own fully interactive Black Ops 3 Zombies TikTok LIVE streams.

At the time, most existing TikTok interaction tools were heavily restricted, locked behind subscriptions, or required paid tiers for basic functionality. I wanted a system that gave streamers complete freedom without paywalls.

What started as a personal project became a full standalone platform built from the ground up while teaching myself programming. The goal was something powerful, stable, and accessible for the COD Zombies streaming community.

*This tool is distributed for free because interactive livestreaming should be accessible to everyone.*

---

## 📦 Installation

<img width="598" height="464" alt="Setup Wizard" src="https://github.com/user-attachments/assets/4e3daa3f-4a0a-492e-820f-63765782a07d" />

### Setup Wizard

1. Download `RedruMs Interactive Zombies Tool v2.2.0 Setup.exe` from [Releases](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases)
2. Run the installer — it will:
   - Install the application
   - Collect your BO3 directory, Plutonium GSC folder, Plutonium T6 config folder, and Plutonium T5 players folder
   - Optionally copy `binds.cfg` to your BO3 players folder
   - Optionally copy `bo2_tiktok_bot.gsc` to your T6 scripts folder and `bo1_tiktok_bot.gsc` to your T5 scripts folder
   - Save paths so the app can auto-write binds files on every save
   - Add a Windows Defender exclusion automatically
   - Create a Desktop shortcut

---

## 🛠️ Setup — Black Ops 3 (Steam)

<img width="1920" height="1040" alt="Setup   diagnostics Tab" src="https://github.com/user-attachments/assets/ae5f48dc-195a-4505-9847-c073c11ae7b2" />

### 1. Install the Required Mod
You **must** have this mod installed and active for any keybinds to work:

**[ZM] Sphynx' Console Commands [v1.0.6] PAUSE MENU OPTIONS**
[Steam Workshop →](https://steamcommunity.com/sharedfiles/filedetails/?id=2860310766)

### 2. Use a Controller
The bot uses your keyboard exclusively for in-game commands. Play with any controller (Xbox, PlayStation via DS4Windows, etc.)

### 3. Set Borderless Windowed
In BO3 graphics settings: **Display Mode → Windowed (Borderless)**

### 4. Export and Load Keybinds
1. Open the tool → **Setup & Diagnostics**
2. Click **Export Binds .cfg (BO3)**
3. Save to your BO3 players folder: `...\Call of Duty Black Ops III\players\`
4. In the BO3 developer console: `/exec binds.cfg`

If you set your BO3 path during install, the app writes binds.cfg automatically on every save — just re-run `/exec binds.cfg` to reload.

### 5. Go Live First
Your TikTok stream **must be active** before clicking Launch Bot.

---

## 🛠️ Setup — Plutonium (T6 / T5)

### 1. Install Plutonium
Download from [plutonium.pw](https://plutonium.pw) and set up your game.

### 2. Install the GSC Script
1. Open the tool → select your Plutonium game from the dropdown
2. Go to **Setup & Diagnostics**
3. Click **Export GSC** for your game
4. Place the file in the correct folder:

| Game | Folder |
|------|--------|
| BO2 (T6) | `%localappdata%\Plutonium\storage\t6\raw\scripts\zm` |
| BO1 (T5) | `%localappdata%\Plutonium\storage\t5\raw\scripts\sp` |

Click **Open GSC Folder** to go straight there. The installer can do this automatically.

### 3. Load Keybinds
1. Click **Export Binds .cfg (Plutonium)**
2. Copy the cfg to your Plutonium players folder
3. In-game console:
   - T6: `exec bot_binds.cfg`
   - T5: `exec pluto_t5_binds.cfg`

If you set your Plutonium config path during install, the app writes the cfg automatically on every save — a reminder will prompt you to re-run the exec command to reload.

### 4. Start as Host
You must be the **host** of the Custom Game lobby for the GSC script to run.

### 5. Set Borderless Windowed and Go Live

Unlike BO3, Plutonium does not have a native borderless windowed option. You need to use **Borderless Gaming** to force the game into borderless windowed mode so the bot's keypresses reach the window correctly.

**[Borderless Gaming →](https://github.com/andrewmd5/Borderless-Gaming/releases)**

1. Launch your Plutonium game in **Windowed** mode
2. Open Borderless Gaming — your game will appear in the list
3. Double-click it to make it borderless
4. Start your TikTok Live, then click **Launch Bot**

---

## 🎯 How Keys & Binds Works

<img width="1920" height="1040" alt="Binds Tab" src="https://github.com/user-attachments/assets/adfe4ad5-6e16-4ba7-8ec8-a09310f66ab4" />

The Keys & Binds tab has three panels that work together:

**Action Binds (left)** — the single source of truth. One row per action, one key per action, grouped by category. Change a key here and everything updates automatically — spin wheel, gift matrix, and cfg export all reflect the change instantly on next save.

**Wheel Spin Pool (middle)** — select which actions appear on the wheel and how rare they are. No key column — keys resolve from Action Binds automatically.

**Gift Routing Matrix (right)** — map TikTok gifts to actions by name. For Direct Key Bind gifts, pick the action from a dropdown — the key resolves automatically. BO3 also supports gift types for timed effects.

---

## 🎮 How Viewers Interact

### ❤️ Likes
| Event | Effect |
|-------|--------|
| Every 1,000 likes | +1,000 points in game |
| Every 5,000 likes | Bonus random spin effect |
| 1K / 2.5K / 5K / 7.5K / 10K | TTS milestone callout |
| Every 2,500 after 10K | Continued TTS milestones up to 25K |

### 🎁 Gifts
| Action Type | What It Does |
|-------------|-------------|
| Direct Key Bind Only | Fires the assigned action's key once |
| Wheel Spin | Triggers a random weighted spin |
| 3rd Person 15s | Switches camera for 15 seconds *(BO3 only)* |
| Random Timescale | Fast or slow timescale for 20 seconds *(BO3 only)* |
| Powerup Rain | Fires powerup all 10 times over 7.5 seconds *(BO3 only)* |
| Random Powerup | Drops one random powerup *(BO3 only)* |

Gifters receive faster `!spin` cooldown (3 min vs 10 min) and chat messages read aloud.

### 💬 Chat Commands
| Command | Effect | Cooldown |
|---------|--------|----------|
| `!spin` | Random weighted spin effect | 10 min (3 min for gifters) |

---

## 🔧 Diagnostics

| Tool | Purpose |
|------|---------|
| Keypress Emulator | 3-second countdown → fires test key → confirms pyautogui works |
| Sign API Health Check | Pings TikTok endpoint → reports online or blocked |
| Copy Session Log | Copies full activity log to clipboard for bug reports |
| Smart Autopath Scan | Scans all drives for BO3 or Plutonium installation |
| Reconnect Counter | Shows how many times the bot reconnected this session |

---

## ⚠️ Antivirus Warning

You may see a Windows Defender SmartScreen warning. This is a **false positive**. The program simulates keyboard input and connects to the internet — behaviours that trigger antivirus heuristics even though the code is safe.

1. Click **More Info**
2. Click **Run Anyway**

The installer adds a Windows Defender exclusion automatically.

---

## 🔍 Troubleshooting

<details>
<summary><b>Keys not working in BO3</b></summary>

- Make sure BO3 is the active focused window (Windowed Borderless required)
- Run the bot as Administrator
- Confirm the Sphynx mod is active in your mods list
- Run `/exec binds.cfg` in the BO3 console
- Test with the Keypress Emulator in Setup & Diagnostics

</details>

<details>
<summary><b>Nothing happening in Plutonium</b></summary>

- Make sure you ran `exec bot_binds.cfg` (T6) or `exec pluto_t5_binds.cfg` (T5) in console
- Make sure you are the HOST of the lobby
- Confirm the GSC file is in the correct folder
- After placing the GSC, run `map_restart` in console
- Make sure Plutonium is running in Windowed mode with **[Borderless Gaming](https://github.com/andrewmd5/Borderless-Gaming/releases)** active — fullscreen blocks keypresses

</details>

<details>
<summary><b>Binds not updating after key change</b></summary>

- Change your key in the Action Binds panel (left column of Keys & Binds tab)
- Click Save Configuration — the cfg file is rewritten automatically
- For BO3: re-run `/exec binds.cfg` in console
- For Plutonium: re-run the exec command in console (prompted automatically)

</details>

<details>
<summary><b>Bot won't connect to TikTok</b></summary>

- You must be actively LIVE on TikTok before launching
- Check your TikTok handle is correct on the Dashboard
- Run the Sign API Health Check in Setup & Diagnostics

</details>

<details>
<summary><b>No TTS voice</b></summary>

- Check the TTS volume slider is above 0
- Check the mute button is not active
- Check Follow TTS and Gifter Chat TTS toggles on the Dashboard
- Check your Windows default audio output device

</details>

<details>
<summary><b>Missing actions after update</b></summary>

- New actions added in updates merge automatically — no reset needed
- If an action is still missing, click Reset to Defaults in Keys & Binds to restore all profile defaults

</details>

---

## ❌ Uninstall

1. **Start Menu → Settings → Apps → Installed Apps**
2. Search **RedruM's Interactive Zombies Tool**
3. Click **Uninstall**

AppData config is cleaned up automatically. `binds.cfg` in BO3 and GSC files in Plutonium remain unless deleted manually.

---

## 📬 Contact

| Platform | Link |
|----------|------|
| TikTok | [@redrum.au](https://tiktok.com/@redrum.au) |
| GitHub | [RedruMs_Interactive_Zombies_Tool](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool) |
| Releases | [Latest Release](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases) |
| Previous | [v2.1.1](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases/tag/2.1.1) |

For bug reports, copy the session log from the **Setup & Diagnostics** panel and send via TikTok DM.

---

## 👤 Credits

Built entirely by **RedruM** from scratch while learning to program.

### Libraries Used
- [TikTokLive](https://github.com/isaackogan/TikTokLive) — TikTok LIVE API wrapper
- [pyautogui](https://github.com/asweigart/pyautogui) — keyboard macro injection
- [pyttsx3](https://github.com/nateshmbhat/pyttsx3) — offline text-to-speech
- [pystray](https://github.com/moses-palmer/pystray) — system tray integration
- [psutil](https://github.com/giampaolo/psutil) — process enumeration for auto game detection
- [pygetwindow](https://github.com/asweigart/PyGetWindow) — game window focus
