# RedruM's Interactive Zombies Tool

**Version:** 2.3.0 &nbsp;|&nbsp; **Developer:** RedruM &nbsp;|&nbsp; **Free & Open Access**

---

## ❓ What Is This?

RedruM's Interactive Zombies Tool connects TikTok LIVE streams directly into Call of Duty Zombies gameplay. Viewer interactions — likes, gifts, and chat commands — trigger real-time in-game effects across three supported titles.

- Likes generate points and bonus spins at milestone thresholds
- Gifts activate immediate in-game actions
- `!spin` command delivers randomised weighted effects from a customisable wheel
- Every 5,000 likes triggers an automatic bonus spin

<img width="1202" height="922" alt="Dashboard" src="https://github.com/user-attachments/assets/9f83a264-230e-4ff4-91a3-f2a6358f2daf" />

---

## 🎮 Supported Games

| Game | Platform | Status |
|------|----------|--------|
| Black Ops 3 Zombies | Steam | ✅ Full Support |
| Black Ops 2 Zombies | Plutonium (T6) | ✅ Full Support |
| Black Ops 1 Zombies | Plutonium (T5) | ✅ Full Support |

The application auto-detects active games and maintains separate configurations per title.

---

## ⚡ Feature List

### Core
- Real-time TikTok LIVE integration — likes, gifts, follows, comments
- Live viewer counter
- Priority keypress queue with overflow protection
- Auto game detection via process scanning every 5 seconds
- Per-game profile system with instant switching
- Independent configuration persistence per game
- Auto-reconnect with reconnect counter and TTS alert
- System tray support — minimize to tray, restore or terminate from icon
- Minimize to Tray toggle — disable to make X close the app normally
- Single-instance lock — prevents multiple copies running simultaneously
- Window size and position remembered between sessions

### Keys & Binds
- Single Action Binds panel as the source of truth for every keybind
- Changes propagate automatically to spin wheel, gift matrix, and cfg export
- Wheel Spin Pool — select effects and set rarity weights (1–10 scale)
- Gift Routing Matrix — map TikTok gifts to actions by name
- New actions merge automatically without data loss
- Per-game reset option

### Interaction
- Weighted spin wheel with anti-repeat buffer
- BO3 gift types: Direct Key Bind, Wheel Spin, 3rd Person 15s, Random Timescale, Powerup Rain, Random Powerup, Aimbot Timer, Infinite Ammo Timer
- T5/T6 gift types: Direct Key Bind, Wheel Spin
- Gift accumulation with 2-second batching window (T5/T6)
- Sequential wheel execution with 8-second gaps (T5/T6)
- Gift stacking up to 10x with stack-specific TTS
- Adjustable per-user cooldowns — gifters 3 min / viewers 10 min default
- Like milestones: 1K through 25K with dedicated TTS callouts
- Automatic +1,000 points per 1,000 likes

### Text-to-Speech
- Offline TTS via pyttsx3 — no internet required
- Action-matched announcements reflecting actual in-game effects
- 43+ specific effect callouts
- Automatic effect name lookup from action binds
- Volume and speed sliders with instant mute toggle
- Individual toggles: Gifter Chat TTS, Gift Action TTS, Spin TTS, Follower TTS
- Live audio gauge visualiser
- Reconnect alert announcement

### Dashboard
- Live viewer count
- Live chat feed — last 50 messages, auto-trimmed
- Spin history — last 5 spins with username
- Session statistics row — follows, gifts, spins, viewers
- Toast notifications — pop-up alerts for spins, follows, like rewards, and personal bests
- Animated launch button — pulses while the bot is running
- Session summary popup on stop

### Stats Tab
- Session history — every session logged automatically with full breakdown
- Personal bests — all-time records across every session
- Lifetime totals — cumulative stats summed across all sessions
- Clear history and reset records independently

### Dashboard Toggles
- **Like Reward / Follow Reward / Gifts** — enable or disable each event independently
- **Follower TTS** — separate toggle for follow shoutouts, independent of Follow Reward
- **!spin** — allow or block the chat spin command
- **Gift TTS / Spin TTS** — mute announcements without affecting other TTS
- **Bonus Spin** — disable automatic bonus spins while keeping points active
- **Auto-Focus** — automatically focus the game window before keypresses
- **Minimize to Tray** — controls whether X minimizes or closes

### Configuration
- Per-game action registry with name, key, and Sphynx command
- Per-game spin wheel configuration
- Per-game gift matrix
- Named preset profiles — save and load complete configurations
- Auto-save on launch and terminate
- Auto-write binds files to configured paths on every save
- JSON config at `%APPDATA%\BO3TikTokBot\config.json`

### BO3 Binds Export
- Dynamically generated from Action Binds panel
- Key changes reflected immediately on next save
- 35 actions including points, powerups, weapons, perks, ammo, chaos effects, zombies, and round controls
- All Sphynx commands verified against the official command list

### Plutonium GSC Integration (T6/T5)
- Silent say-bridge — bot presses key → GSC catches `say !botcmd_X` silently
- T6: 33 in-game actions
- T5: 23 in-game actions
- 37-weapon random deck (Fisher-Yates shuffle — all 37 before any repeat)
- In-game wheel spin with slot machine animation
- All in-game text displayed in red

### T6 Interactive Events

| Action | Key | Description |
|--------|-----|-------------|
| Red Light Green Light | p | 30s event — movement during red light removes 30% health |
| Spawn Zombies | k | Adds 5 zombies to the current wave |
| Freeze Controls | j | Disables player controls for 3 seconds |
| Drunk Mode | t | Screen blur + random timescale for 10 seconds |
| Remove All Points | y | Strips all player points instantly |
| Give Wonder Weapon | End | Map-aware wonder weapon with anti-repeat logic |
| Spawn Boss | F3 | Map-aware boss spawn — Avogadro / Brutus / Panzer |

### Setup & Export
- Export Binds .cfg (BO3) — dynamically generated from current Action Binds
- Export Binds .cfg (Plutonium) — correct filename per game
- Auto-write on save
- Export GSC (T6/T5)
- Open GSC Folder — opens correct Plutonium folder in Explorer
- Smart Autopath Scan — finds all Plutonium folders automatically

### Returning User Protection
- Version check on launch with What's New notice
- Full configuration preserved across updates
- Actions merge and clean up automatically on version updates
- Installer never overwrites existing GSC or binds files

### Diagnostics
- Keypress emulator — 3-second countdown then fires a test key
- Sign API health check — pings TikTok's endpoint
- Session log — full timestamped activity feed, copy to clipboard
- Reconnect counter
- Keybind drift detector — warns on save if keys changed since last export
- Contextual tooltips on every control across all tabs

---

## 💡 Why I Made This

I originally created this tool because I wanted to run my own fully interactive Black Ops 3 Zombies TikTok LIVE streams.

At the time, most existing TikTok interaction tools were heavily restricted, locked behind subscriptions, or required paid tiers for basic functionality. I wanted a system that gave streamers complete freedom without paywalls.

What started as a personal project became a full standalone platform built from the ground up while teaching myself programming. The goal was something powerful, stable, and accessible for the COD Zombies streaming community.

*This tool is distributed for free because interactive livestreaming should be accessible to everyone.*

---

## 📦 Installation

<img width="598" height="464" alt="Setup Wizard" src="https://github.com/user-attachments/assets/fbacf029-625c-4191-a346-c0e0e6278b1f" />

1. Download `RedruMs Interactive Zombies Tool v2.3.0 Setup.exe` from [Releases](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases)
2. Run the installer — it will:
   - Install the application
   - Collect your BO3 directory, Plutonium GSC folder, and config paths
   - Optionally copy `binds.cfg` to your BO3 players folder
   - Optionally copy GSC files to the correct Plutonium folders
   - Save paths so the app can auto-write on every save
   - Add a Windows Defender exclusion automatically
   - Create a Desktop shortcut

---

## 🛠️ Setup — Black Ops 3 (Steam)

<img width="1920" height="1040" alt="Setup & Diagnostics" src="https://github.com/user-attachments/assets/fb45cd96-7308-4324-966d-27f96c8e4b9b" />

1. **Install the required mod**
   **[ZM] Sphynx' Console Commands [v1.0.6] PAUSE MENU OPTIONS** → [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=2860310766)
   Must be active in your mods list before launching.

2. **Use a controller**
   The bot uses your keyboard exclusively for in-game commands.

3. **Set Borderless Windowed**
   BO3 graphics settings → Display Mode → Windowed (Borderless)

4. **Export and load keybinds**
   Setup & Diagnostics → Export Binds .cfg (BO3) → save to your BO3 players folder → run `/exec binds.cfg` in console.
   If you set your BO3 path during install, binds.cfg updates automatically on every save.

5. **Go live on TikTok first, then click Launch**

---

## 🛠️ Setup — Plutonium (T6/T5)

1. **Install the GSC script**
   Setup & Diagnostics → Export GSC → place in the correct folder:

   | Game | Folder |
   |------|--------|
   | BO2 T6 | `%localappdata%\Plutonium\storage\t6\raw\scripts\zm` |
   | BO1 T5 | `%localappdata%\Plutonium\storage\t5\raw\scripts\sp` |

   Click **Open GSC Folder** to navigate there directly.

2. **Load keybinds**
   Export Binds .cfg (Plutonium) → copy to your Plutonium players folder → run the exec command in console:
   - T6: `exec bot_binds.cfg`
   - T5: `exec pluto_t5_binds.cfg`

3. **Start as host** — GSC only runs if you are the lobby host

4. **Set Borderless Windowed**
   Plutonium doesn't have native borderless. Use **[Borderless Gaming](https://github.com/andrewmd5/Borderless-Gaming/releases)**.

5. **Go live on TikTok first, then click Launch**

---

## 🎯 How Keys & Binds Works

<img width="1920" height="1040" alt="Keys & Binds" src="https://github.com/user-attachments/assets/f5f47ad6-02f7-4410-a773-0d923397dc99" />

**Action Binds (left)** — one row per action, one key per action. Change a key here and everything updates automatically.

**Wheel Spin Pool (middle)** — select which actions appear on the wheel and set rarity (1–10). Keys resolve from Action Binds automatically.

**Gift Routing Matrix (right)** — map TikTok gifts to actions by name. Key resolves automatically.

---

## 🎮 How Viewers Interact

### ❤️ Likes

| Event | Effect |
|-------|--------|
| Every 1,000 likes | +1,000 in-game points |
| Every 5,000 likes | Bonus random spin |
| 1K / 2.5K / 5K / 7.5K / 10K | TTS milestone callout |
| Every 2.5K after 10K | Continued callouts through 25K |

### 🎁 Gifts

| Action Type | Effect |
|-------------|--------|
| Direct Key Bind Only | Fires the assigned action once |
| Wheel Spin | Triggers a random weighted spin |
| 3rd Person 15s | Switches camera for 15 seconds *(BO3 only)* |
| Random Timescale | Fast or slow timescale for 20 seconds *(BO3 only)* |
| Powerup Rain | Fires powerup 10 times over 7.5 seconds *(BO3 only)* |
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
| Smart Autopath Scan | Finds BO3 and Plutonium installations automatically |
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
- Make sure Plutonium is in Windowed mode with **[Borderless Gaming](https://github.com/andrewmd5/Borderless-Gaming/releases)** active — fullscreen blocks keypresses

</details>

<details>
<summary><b>!botcmd message appearing on HUD in Plutonium</b></summary>

The bot uses `say !botcmd_X` to pass commands to the GSC script. To hide it, disable text chat display in your Plutonium in-game settings. The GSC will still receive and process all commands correctly.

</details>

<details>
<summary><b>Binds not updating after key change</b></summary>

- Change your key in the Action Binds panel
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
- Check Gift TTS, Spin TTS, Gifter Chat TTS, and Follower TTS toggles on the Dashboard
- Check your Windows default audio output device

</details>

<details>
<summary><b>Missing actions after update</b></summary>

- New actions added in updates merge automatically — no reset needed
- Removed actions disappear automatically on next launch
- If an action is still missing, click Reset to Defaults in Keys & Binds

</details>

---

## ❌ Uninstall

1. **Start Menu → Settings → Apps → Installed Apps**
2. Search **RedruM's Interactive Zombies Tool**
3. Click **Uninstall**

AppData config is cleaned up automatically. `binds.cfg` and GSC files remain unless deleted manually.

---

## 📬 Contact

| Platform | Link |
|----------|------|
| TikTok | [@redrum.au](https://tiktok.com/@redrum.au) |
| GitHub | [RedruMs_Interactive_Zombies_Tool](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool) |
| Releases | [Latest Release](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases) |
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
