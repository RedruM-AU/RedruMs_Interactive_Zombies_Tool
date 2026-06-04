# RedruM's Interactive Zombies Tool

**Version:** 2.0.0 &nbsp;|&nbsp; **Developer:** RedruM &nbsp;|&nbsp; **Free & Open Access**

> 🚨 **This is a FREE tool. If you paid for it, you were scammed.**
> Official download: [github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool)

---

## ❓ What Is This?

RedruM's Interactive Zombies Tool connects your TikTok LIVE stream directly into Call of Duty Zombies. Everything your viewers do — likes, gifts, and chat commands — affects your game in real time.

- **Likes** give points and trigger bonus spins at milestones
- **Gifts** trigger in-game actions instantly
- **`!spin`** gives a random weighted effect from your custom wheel
- Every **5,000 likes** fires a bonus random spin

It turns your TikTok stream into a fully interactive Zombies experience across three games.

---

## 🎮 Supported Games

| Game | Platform | Status |
|------|----------|--------|
| Black Ops 3 Zombies | Steam | ✅ Full Support |
| Black Ops 2 Zombies | Plutonium (T6) | ✅ Full Support |
| Black Ops 1 Zombies | Plutonium (T5) | ✅ Supported |

The app detects which game is running automatically and switches to the correct profile. Each game has its own independent configuration — spin effects, gift binds, and weights are stored separately and restored when you switch back.

---

## ⚡ Feature List

### Core
- Real-time TikTok LIVE integration (likes, gifts, follows, comments)
- Priority keypress queue with overflow protection
- Auto game detection via process scanning
- Per-game profile system with instant switching
- Per-game configuration persistence — customisations saved independently per game
- Auto-reconnect on TikTok API drops
- System tray support — minimise to tray, restore or terminate from icon

### Interaction
- Weighted spin wheel with anti-repeat buffer
- Six gift action types: Direct Key Bind, Wheel Spin, 3rd Person, Random Timescale, Powerup Rain, Random Powerup
- Gift stacking (up to 10x) with stack-specific TTS
- Per-user spin cooldowns — 3 min (gifters) / 10 min (standard viewers)
- Live gifter tracking — gifters get priority cooldown and chat readout
- Like milestones: 1K, 2.5K, 5K, 7.5K, 10K and every 2.5K after
- +1,000 points every 1,000 likes automatically

### TTS
- Offline TTS via pyttsx3 — no internet required
- Action-based TTS — callout matches what actually happens in game, not just the gift name
- Per-effect rich TTS pools — 30+ specific effect callouts (e.g. "Rose from RedruM — Insta Kill!")
- Automatic effect name lookup — remapping a gift to a different key updates TTS automatically
- Volume slider and instant mute toggle
- Live audio gauge visualiser

### Configuration
- Per-game spin wheel customisation — name, key, weight, enable/disable per effect
- Per-game gift matrix — gift name, key, action type, live receive counter
- Named preset profiles — save and load complete configurations by name
- Reset to Defaults per game — one click, only affects the selected game
- Auto-save on launch and terminate
- JSON config at `%APPDATA%\BO3TikTokBot\config.json`
- Backward compatible with v1.0.1 config files

### Plutonium GSC Integration (T6/T5)
- Silent say-bridge — bot presses key → GSC catches `say !botcmd_X` silently, no chat spam
- 20+ in-game actions for T6: powerups, perks, points, weapons, timescale, 3rd person, PAP upgrade/downgrade, wheel spin, map restart
- 37-weapon random weapon deck (Fisher-Yates shuffle — all 37 before any repeat)
- In-game wheel spin — 19-action slot machine displayed on screen, lands and fires

### Setup & Export
- Export Binds .cfg (BO3) — full Sphynx mod bind set
- Export Binds .cfg (Plutonium) — one `exec bot_binds.cfg` loads all binds permanently
- Export GSC (T6/T5) — confirmed working scripts exported directly from the app
- Open GSC Folder — opens correct Plutonium folder in Explorer, creates it if missing
- Smart drive scan — finds BO3 or Plutonium installation automatically

### Diagnostics
- Keypress emulator — 3-second countdown then fires a test key to verify permissions
- Sign API health check — pings TikTok's endpoint and reports online/blocked
- Session log — full timestamped activity feed, copy to clipboard for bug reports
- Reconnect counter — tracks API drops this session
- Contextual tooltips on every major UI control

---

## 💡 Why I Made This

I originally created this tool because I wanted to run my own fully interactive Black Ops 3 Zombies TikTok LIVE streams.

At the time, most existing TikTok interaction tools were heavily restricted, locked behind subscriptions, or required paid tiers for basic functionality. I wanted a system that gave streamers complete freedom without paywalls.

What started as a personal project became a full standalone platform built from the ground up while teaching myself programming. The goal was something powerful, stable, and accessible for the COD Zombies streaming community.

*This tool is distributed for free because interactive livestreaming should be accessible to everyone.*

---

## 📦 Installation

### Setup Wizard (Recommended)
1. Download `RedruMs Interactive Zombies Tool v2.0.0 Setup.exe` from [Releases](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases)
2. Run the installer — it will:
   - Install the application
   - Optionally copy `binds.cfg` directly to your BO3 players folder
   - Optionally copy `bo2_tiktok_bot.gsc` directly to your Plutonium T6 scripts folder
   - Add a Windows Defender exclusion automatically
   - Create a Desktop shortcut

### Portable
1. Download `RedruMs_Interactive_Zombies_Tool_Portable.zip` from [Releases](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases)
2. Extract anywhere
3. Run `RedruMs_Interactive_Zombies_Tool.exe`

---

## 🛠️ Setup — Black Ops 3 (Steam)

### 1. Install the Required Mod
You **must** have this mod installed and active for any keybinds to work:

**[ZM] Sphynx' Console Commands [v1.0.6] PAUSE MENU OPTIONS**
[Steam Workshop →](https://steamcommunity.com/sharedfiles/filedetails/?id=2860310766)

### 2. Use a Controller
The bot uses your keyboard exclusively for in-game commands. Play with any controller (Xbox, PlayStation via DS4Windows, etc.)

### 3. Set Borderless Windowed
In BO3 graphics settings: **Display Mode → Windowed (Borderless)**

Strict Fullscreen blocks automated key injection.

### 4. Export and Load Keybinds
1. Open the tool → **Setup & Diagnostics**
2. Click **Export Binds .cfg (BO3)**
3. Save to your BO3 players folder: `...\Call of Duty Black Ops III\players\`
4. In the BO3 developer console: `/exec binds.cfg`

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
| BO1 (T5) | `%localappdata%\Plutonium\storage\t5\scripts\sp` |

Click **Open GSC Folder** to go straight there. The installer can do this automatically.

### 3. Load Keybinds
1. Click **Export Binds .cfg (Plutonium)**
2. Copy `bot_binds.cfg` to your Plutonium config folder
3. In-game console: `exec bot_binds.cfg`

All binds load permanently — you only need to do this once.

### 4. Start as Host
You must be the **host** of the Custom Game lobby for the GSC script to run.

### 5. Set Borderless Windowed and Go Live
Same as BO3 — Windowed (Borderless) required. Stream must be active before Launch Bot.

---

## 🎮 How Viewers Interact

### ❤️ Likes
| Event | Effect |
|-------|--------|
| Every 1,000 likes | +1,000 points in game |
| Every 5,000 likes | Bonus random spin effect |
| 1K / 2.5K / 5K / 7.5K / 10K | TTS milestone callout |
| Every 2,500 after 10K | Continued TTS milestones |

### 🎁 Gifts
Each gift triggers an in-game action based on your configuration in Keys & Binds. Supported action types:

| Action Type | What It Does |
|-------------|-------------|
| Direct Key Bind Only | Fires the assigned key once |
| Wheel Spin | Triggers a random weighted spin |
| 3rd Person 15s | Switches camera for 15 seconds |
| Random Timescale | Fast or slow timescale for 20 seconds |
| Powerup Rain | Fires powerup key 10 times over 20 seconds |
| Random Powerup | Picks one random powerup and drops it |

Gifters receive:
- Faster `!spin` cooldown (3 min vs 10 min)
- Their chat messages read aloud on stream

### 💬 Chat Commands
| Command | Effect | Cooldown |
|---------|--------|----------|
| `!spin` | Random weighted spin effect | 10 min (3 min for gifters) |

---

## 🔧 Diagnostics

All diagnostic tools are in the **Setup & Diagnostics** tab:

| Tool | Purpose |
|------|---------|
| Keypress Emulator | 3-second countdown → fires test key → confirms pyautogui works |
| Sign API Health Check | Pings TikTok endpoint → reports online or blocked |
| Copy Session Log | Copies full activity log to clipboard for bug reports |
| Smart Autopath Scan | Scans all drives for BO3 or Plutonium installation |
| Reconnect Counter | Shows how many times the bot reconnected this session |

---

## ⚙️ Configuration

### Keys & Binds Tab
- **Spin Wheel** — add, remove, edit effects. Set name, key binding, and weight (rarity). Enable/disable individual effects.
- **Gift Matrix** — map any TikTok gift to any key and action type. Live receive counter per gift.
- **Reset to Defaults** — restores the current game's default configuration

### Dashboard
- **Preset Profiles** — save your full configuration under a name and reload it any time
- **Game Selector** — switch between game profiles instantly
- **Per-game persistence** — all customisations stored independently per game

### Config File Location
```
%APPDATA%\BO3TikTokBot\config.json
```

---

## ⚠️ Antivirus Warning

You may see a Windows Defender SmartScreen warning. This is a **false positive**.

This program simulates keyboard input and connects to the internet — behaviours that trigger antivirus heuristics even though the code is safe.

**If you see the SmartScreen popup:**
1. Click **More Info**
2. Click **Run Anyway**

The installer adds a Windows Defender exclusion automatically.

---

## 🔍 Troubleshooting

<details>
<summary><b>Keys not working in BO3</b></summary>

- Make sure BO3 is the active focused window
- Run the bot as Administrator
- Confirm the Sphynx mod is active in your mods list
- Run `/exec binds.cfg` in the BO3 console
- Test with the Keypress Emulator in Setup & Diagnostics

</details>

<details>
<summary><b>Nothing happening in Plutonium</b></summary>

- Make sure you ran `exec bot_binds.cfg` in console
- Make sure you are the HOST of the lobby
- Confirm the GSC file is in the correct folder
- After placing the GSC, run `map_restart` in console
- A green "GSC LOADED OK" flash confirms the script loaded

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
- Check your Windows default audio output device

</details>

<details>
<summary><b>Auto game detection not working</b></summary>

- Make sure your game is fully launched before the bot checks
- Detection runs every 5 seconds — wait a moment after launching
- You can always select the game manually from the dropdown

</details>

<details>
<summary><b>Antivirus blocking the exe</b></summary>

- The installer adds a Defender exclusion automatically
- If it failed, add the install folder manually in Windows Security settings

</details>

---

## ❌ Uninstall

1. **Start Menu → Settings → Apps → Installed Apps**
2. Search **RedruM's Interactive Zombies Tool**
3. Click **Uninstall**

Your `binds.cfg` in the BO3 players folder and any GSC scripts in Plutonium folders remain unless deleted manually. AppData config is cleaned up automatically.

---

## 📬 Contact

| Platform | Link |
|----------|------|
| TikTok | [@redrum.au](https://tiktok.com/@redrum.au) |
| GitHub | [RedruMs_Interactive_Zombies_Tool](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool) |
| Releases | [Latest Release](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases) |
| Previous | [v1.0.1](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases/tag/1.0.1) |

For bug reports, copy the session log from the **Administrative Debug Utilities** panel and send via TikTok DM.

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

---

*Created by RedruM &nbsp;|&nbsp; Last Updated: June 2026 &nbsp;|&nbsp; v2.0.0*
