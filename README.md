# RedruM's Interactive Zombies Tool

**Version:** 2.5.0 &nbsp;|&nbsp; **Developer:** RedruM &nbsp;|&nbsp; **Free & Open Access**

---

## ❓ What Is This?

Connects your TikTok LIVE stream directly into Call of Duty Zombies. Viewer likes, gifts, and chat commands trigger real in-game effects while you play.

- Likes earn points and bonus spins
- Gifts fire in-game actions instantly
- `!spin` in chat rolls a weighted effect wheel
- Every 5,000 likes triggers an automatic bonus spin

---

## 🎮 Supported Games

| Game | Platform | Status |
|------|----------|--------|
| Black Ops 3 Zombies | Steam | ✅ Full Support |
| Black Ops 2 Zombies | Plutonium (T6) | ✅ Full Support |
| Black Ops 1 Zombies | Plutonium (T5) | ✅ Full Support |

The app auto-detects which game is running and keeps a separate configuration per title.

---

## ⚡ Features

### Live Interaction
- Real-time TikTok LIVE events — likes, gifts, follows, chat
- Weighted spin wheel with anti-repeat and per-user cooldowns
- Gift Routing Matrix — map any TikTok gift to any action
- Gift stacking, gift combining (T5/T6), and queued spins so effects never overlap
- Like milestones with TTS callouts up to 25K
- Live viewer counter, chat feed, spin history, top gifters
- Session uptime and likes-per-minute readout while live

### Keys & Binds
- One Action Binds panel drives everything — change a key once, the wheel, gifts, and exports all update
- Click a key field and press the key you want — no typing key names
- Search box to filter actions, zebra-striped tables, resizable panels
- Unmatched gifts received on stream can be added to the matrix in one click
- Named presets, per-game reset, key conflict and drift detection

### Settings Tab
- Audio & TTS — volume, speed, Windows voice picker, test button, per-type TTS toggles
- Cooldowns, Events, and Reward configuration in one place
- **Advanced tuning** — gift stack cap, spin queue delay, gift combine window, milestone step, effect durations
- 20 themes (dark, light, AMOLED) grouped by colour, plus a custom accent colour picker
- Font size scaling for readability
- One-click settings backup and restore

### Text-to-Speech
- Fully offline (pyttsx3) — no internet required
- Action-matched callouts for gifts, spins, follows, and milestones
- Live audio gauge and instant mute

### Game Integration
- **BO3:** dynamic `binds.cfg` export using the Sphynx Console Commands mod, plus a Custom Actions builder for any Sphynx command
- **T6/T5:** silent GSC say-bridge — no chat spam on stream, in-game slot machine spin animation, map-aware wonder weapons and boss spawns
- Auto-write binds and GSC to your configured paths on every save
- Smart Autopath Scan finds your game installs automatically

### Stream Extras
- **OBS Overlay** — live stats written to text files OBS shows on stream: likes, viewers, bonus spin progress, last gift, last spin, top gifter and more
- **Achievements** — 20 to unlock; session milestones pop live on stream with TTS
- Smarter TTS — stack-size reactions, gifter streak callouts, hourly live callouts, rare spin lines

### Quality of Life
- Demo Mode — test your full setup without being live
- Stats tab — session history, personal bests, lifetime totals, achievements, lifetime top gifters
- Crash-safe config with automatic backup recovery
- Auto-reconnect that keeps all events working after a drop
- System tray support, single-instance lock, opens maximized
- Update checker with preserved configuration across versions

---

## 💡 Why I Made This

I built this to run my own fully interactive BO3 Zombies TikTok streams. Most existing tools were locked behind subscriptions, so I made one with complete freedom and no paywalls — while teaching myself programming along the way.

*Free forever, because interactive livestreaming should be accessible to everyone.*

---

## 📦 Installation

1. Download the Setup exe from [Releases](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases)
2. Run the installer — it sets up paths, copies GSC/binds files to your game folders, offers a Defender exclusion, and creates a desktop shortcut

---

## 🛠️ Setup — Black Ops 3 (Steam)

1. **Install the required mod:** [ZM] Sphynx' Console Commands [v1.0.6] → [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=2860310766)
2. **Play on a controller** — the bot uses your keyboard for commands
3. **Set Display Mode to Windowed (Borderless)**
4. **Export binds:** Setup & Diagnostics → Export Binds .cfg (BO3) → save to your BO3 players folder → run `/exec binds.cfg` in console
5. **Go live on TikTok first, then click Launch**

## 🛠️ Setup — Plutonium (T6/T5)

1. **Install the GSC script:** Setup & Diagnostics → Export GSC → place in:

   | Game | Folder |
   |------|--------|
   | BO2 T6 | `%localappdata%\Plutonium\storage\t6\raw\scripts\zm` |
   | BO1 T5 | `%localappdata%\Plutonium\storage\t5\raw\scripts\sp` |

2. **Load binds:** Export Binds .cfg (Plutonium) → copy to your players folder → in console: `exec bot_binds.cfg` (T6) or `exec pluto_t5_binds.cfg` (T5)
3. **Start as host** — GSC only runs for the lobby host
4. **Use [Borderless Gaming](https://github.com/andrewmd5/Borderless-Gaming/releases)** — fullscreen blocks keypresses
5. **Go live on TikTok first, then click Launch**

---

## 🎮 How Viewers Interact

| Event | Effect |
|-------|--------|
| Every 1,000 likes | +1,000 in-game points |
| Every 5,000 likes | Bonus random spin |
| Gifts | Fire their mapped action instantly |
| `!spin` in chat | Random weighted effect — 10 min cooldown (3 min for gifters) |

Gifters also get their chat messages read aloud. All thresholds and cooldowns are adjustable in Settings.

---

## ⚠️ Antivirus Warning

You may see a Windows Defender SmartScreen warning. This is a **false positive** — the program simulates keyboard input and reads TikTok LIVE data, which triggers antivirus heuristics even on safe software.

Click **More Info → Run Anyway**. The installer can add a Defender exclusion for you (checkbox during install).

---

## 🔍 Troubleshooting

<details>
<summary><b>Keys not working in BO3</b></summary>

- BO3 must be in Windowed (Borderless) and focused
- Run the bot as Administrator
- Sphynx mod must be active
- Re-run `/exec binds.cfg` in console
- Test with the Keypress Test in Setup & Diagnostics

</details>

<details>
<summary><b>Nothing happening in Plutonium</b></summary>

- Run the exec command in console (`exec bot_binds.cfg` / `exec pluto_t5_binds.cfg`)
- You must be the lobby HOST
- GSC file must be in the correct folder — run `map_restart` after placing it
- Use Borderless Gaming — fullscreen blocks keypresses

</details>

<details>
<summary><b>!botcmd text on HUD in Plutonium</b></summary>

Disable text chat display in your Plutonium in-game settings. The GSC still receives every command.

</details>

<details>
<summary><b>Bot won't connect to TikTok</b></summary>

- You must be actively LIVE before launching
- Check your TikTok handle on the Dashboard
- Run the TikTok API Health Check in Setup & Diagnostics

</details>

<details>
<summary><b>No TTS voice</b></summary>

- Check the Mute TTS button on the Dashboard
- Check volume, voice, and TTS toggles in the Settings tab
- Use Test Voice in Settings to confirm audio works

</details>

<details>
<summary><b>Binds not updating after a key change</b></summary>

- Change the key in Action Binds → Save Configuration
- Re-run the exec command in the game console

</details>

---

## ❌ Uninstall

**Settings → Apps → RedruM's Interactive Zombies Tool → Uninstall**

The uninstaller asks whether to keep or remove your settings and stats. GSC and cfg files in game folders remain unless deleted manually.

---

## 📬 Contact

| Platform | Link |
|----------|------|
| Discord | [RedruM's Server](https://discord.gg/atgQj8Fa8t) |
| TikTok | [@redrum.au](https://tiktok.com/@redrum.au) |
| Releases | [Latest Release](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases) |

For bug reports, copy the session log from Setup & Diagnostics and post it in Discord or DM on TikTok.

---

## 👤 Credits

Built entirely by **RedruM** from scratch while learning to program.

Completely free — if you'd like to support development: [Ko-fi](https://ko-fi.com/redrumau). Nothing is gated behind it.

### Libraries Used
- [TikTokLive](https://github.com/isaackogan/TikTokLive) — TikTok LIVE API wrapper
- [pyautogui](https://github.com/asweigart/pyautogui) — keypress simulation
- [pyttsx3](https://github.com/nateshmbhat/pyttsx3) — offline text-to-speech
- [pystray](https://github.com/moses-palmer/pystray) — system tray
- [psutil](https://github.com/giampaolo/psutil) — auto game detection
- [pygetwindow](https://github.com/asweigart/PyGetWindow) — game window focus
