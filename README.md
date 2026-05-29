[README.md](https://github.com/user-attachments/files/28352241/README.md)
# BO3 TikTokLIVE Interaction Tool

**Version:** 1.0.1  |  **Developer:** RedruM
---
<img width="598" height="464" alt="Setup Wizard" src="https://github.com/user-attachments/assets/6fd607d8-ee35-4b28-8275-7ece79fde588" />
---

## ❓ What Is This?

This tool connects your TikTok LIVE stream directly into Black Ops 3 Zombies. Everything your viewers do—likes, gifts, and chat commands—affects your game in real time.

* **Likes** give points.
* **Gifts** trigger in-game actions.
* `!spin` gives a random effect. 
* Every 5,000 likes fires a bonus spin. 

It turns your TikTok stream into a fully interactive Zombies experience.
<img width="1920" height="1040" alt="Dashboard Live" src="https://github.com/user-attachments/assets/d26ce73a-a834-4d89-b4d4-b57522745c4b" />
---

## 💡 Why I Made This

I originally created this tool because I wanted to run my own fully interactive Black Ops 3 Zombies TikTok LIVE streams.

At the time, most existing TikTok interaction tools were either heavily restricted, locked behind subscriptions, or required paid tiers just to unlock basic functionality. Many only allowed a small number of actions unless you paid monthly fees.

I wanted a system that gave streamers complete freedom to create chaotic, highly interactive Zombies streams without artificial limitations or paywalls.

What started as a personal project quickly evolved into a full standalone interaction platform featuring:
* Real-time TikTok LIVE integration
* Custom in-game triggers
* Viewer commands
* TTS (Text-to-Speech) systems
* Automated setup tools
* Diagnostics
* Queue systems
* Advanced interaction handling

The entire project was built from the ground up while teaching myself programming along the way, with the goal of creating something powerful, stable, and accessible for the BO3 Zombies streaming community.

This tool is being distributed for free because interactive livestreaming should be accessible to everyone, not locked behind expensive subscriptions.

*Created by RedruM for the TikTok LIVE & BO3 Zombies community.*

---

## 🛠️ Before You Launch — Required Setup

### 1. Install the Mod (Required)
You **MUST** have this Steam Workshop mod installed and loaded inside Black Ops 3 for **ANY** keybinds to work:
* **Mod Name:** `[ZM] Sphynx' Console Commands [v1.0.6] PAUSE MENU OPTIONS`
* **Link:** [Steam Workshop Page](https://steamcommunity.com/sharedfiles/filedetails/?id=2860310766)

*Subscribe, launch BO3, and make sure it appears in your active mods list before proceeding.*

### 2. Use a Controller to Play
A controller is required to play during the stream. The bot uses your keyboard exclusively to send in-game commands—keyboard input is reserved for the bot. Any standard controller (Xbox, PlayStation via DS4Windows, or similar) will work.

### 3. Set BO3 to Borderless Windowed
In BO3 graphics settings, set Display Mode to: **Windowed (Borderless)**
> *Note: Strict Fullscreen blocks automated key injection. The bot will not be able to send keypresses otherwise.*

### 4. Configure Your Keybinds
1. Open the tool and go to the **Setup & Diagnostics** tab.
2. Click **"Export Custom Mod Menu Bindings .cfg Payload File"**.
3. Save `binds.cfg` to your BO3 "players" folder:
   * Usually: `C:\Program Files (x86)\Steam\steamapps\common\Call of Duty Black Ops III\players\`
4. In the BO3 developer console, type: `/exec binds.cfg`
5. Your binds are now active.
<img width="1920" height="1040" alt="Keys   binds" src="https://github.com/user-attachments/assets/b2b46386-189a-44e6-a7c8-a9a8f69eeed8" />

### 5. Your Stream Must Be Live
The bot can only connect to an active TikTok Live session. Go live on TikTok **BEFORE** clicking Launch Bot.

---

## 🚀 First Time Launch

1. Open the tool from your Desktop shortcut.
2. Go to the **Keys & Binds** tab — check your gift and spin settings match what you want.
3. Make sure your TikTok handle is set correctly on the Dashboard (`@YourTikTokUsername` by default — change it to yours).
4. Inside BO3, open the developer console and type: `/exec binds.cfg`
5. Start your TikTok Live stream.
6. Click **"Launch Bot Gateway System"**.
7. Alt-tab into BO3 and play.

*That's it. The bot handles everything else.*

---

## 🎮 How Viewers Interact

### 🔴 Likes
* **Every 1,000 likes** → `+1,000` points in game
* **Every 5,000 likes** → Bonus random spin effect

### 🎁 Gifts
Each gift triggers a specific in-game action instantly. See the **Keys & Binds** tab for the full list.
* **Gifters get:**
  * Faster `!spin` cooldown (3 min instead of 10 min)
  * Their chat messages read aloud on stream

### 💬 Chat Commands
* `!spin` → Random in-game effect (10 min cooldown / 3 min cooldown for gifters)
* `!help` → Bot reads out how to interact with the stream

### 🏆 Milestones
* `1,000` / `2,500` / `5,000` / `7,500` / `10,000` likes and every `2,500` after that trigger a TTS callout.

---

## ⚠️ Antivirus Warning — Read This

You may see a Windows Defender SmartScreen warning the first time you run this tool. This is a **FALSE POSITIVE**.

### Why it happens:
This program was built in Python using PyInstaller. It simulates keyboard input (to control the game) and connects to the internet (to read your TikTok chat). These behaviours trigger generic antivirus heuristics even though the code is completely safe.

The installer automatically adds a Windows Defender exclusion for the installation folder. If you see a SmartScreen popup:
1. Click **"More Info"**
2. Click **"Run Anyway"**

*To guarantee transparency, trusted community members or reviewers can request a code audit to verify the tool's safety.*

---

## 🔍 Troubleshooting

* **Keys not working in game?**
  * Make sure BO3 is the active focused window
  * Run the bot as Administrator if keys still don't fire
  * Test with the keypress emulator in Setup & Diagnostics
* **Bot won't connect?**
  * You must be actively LIVE on TikTok first
  * Check your TikTok handle is correct on the Dashboard
  * Use the Sign API Health Check in Setup & Diagnostics
* **No TTS voice?**
  * Check TTS volume slider is above 0
  * Make sure TTS is not muted (🔇 button)
  * Check Windows default audio output device
* **Antivirus blocking the exe?**
  * Add the install folder to your Windows Defender exclusions
  * The installer does this automatically — if it failed, do it manually in Windows Security settings
* **Bot connects but nothing happens in game?**
  * Make sure you ran `/exec binds.cfg` in BO3 console
  * Make sure the Sphynx mod is active in BO3
  * Make sure BO3 is in Windowed (Borderless) mode

---

## ❌ How to Uninstall

Should you wish to remove the tool:
1. Open the Windows Start Menu and go to **Settings > Apps > Installed Apps**.
2. Search for `"BO3 TikTokLIVE Interaction Tool"`.
3. Click **Uninstall**. 

*(Note: This will cleanly remove the tool, but your custom 'binds.cfg' inside the BO3 players folder will remain untouched unless deleted manually.)*

---

## 📬 Contact

* **TikTok:** [@redrum.au](https://tiktok.com/@redrum.au)  |  [tiktok.com/@redrum.au](https://tiktok.com/@redrum.au)

For bug reports, copy the session log from the **Administrative Debug Utilities** panel in the app and send it via TikTok DM.

---
*Created by RedruM  |  Last Updated: May 2026  |  v1.0.1*
Free Black Ops 3 Zombies TikTok Live Interaction Tool
