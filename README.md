# RedruM's Interactive Zombies Tool

**Version** 2.8.0 &nbsp;|&nbsp; **Windows** &nbsp;|&nbsp; **Developer** RedruM &nbsp;|&nbsp; **Free forever**

[Website](https://redrumtools.com/) · [Download](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases/latest) · [Discord](https://discord.gg/VFeZVGtBA7)

---

## ❓ What Is This?

Connect TikTok LIVE to Call of Duty Zombies. Viewers can earn points with likes, trigger in-game effects with gifts, or type `!spin` to roll a weighted effect wheel.

![Live dashboard in the RedruM theme with sample chat and gift activity](docs/screenshots/v2.8.0/dashboard.png)

---

## 🎮 Supported Games

| Game | Platform | Game console command |
|---|---|---|
| Black Ops 3 Zombies | Steam | `/exec binds.cfg` |
| Black Ops 2 Zombies | Plutonium T6 | `exec bot_binds.cfg` |
| Black Ops 1 Zombies | Plutonium T5 | `exec pluto_t5_binds.cfg` |

Each game has its own profile. A green dot beside **Game** means the app detected the selected game's window.

---

## ⚡ Features

### Live Interaction

- See chat, likes, viewers, follows, recent gifts, top gifters and spin cooldowns on **Live**.
- Map gifts to actions and set like rewards, follow rewards, bonus spins and cooldowns.
- Use **Start demo** to test sample events offline. With **Enable game input** on, switch back to Zombies within three seconds.

### Actions & Gifts

- Edit **Keybinds**, **Gift mappings** and the **Spin wheel** in one place.
- Capture keys, check conflicts, search the gift catalog and see the wheel's base odds.
- Add custom console commands for BO3. BO1 and BO2 profiles use their built-in actions.

![Action keybinds in the Aether theme](docs/screenshots/v2.8.0/keybinds.png)

### Settings

- Choose a collapsible sidebar or top tabs, adjust text size, and pick from dark, light and gradient themes.
- Set up Windows voice callouts, OBS text files and optional Spotify track display.
- Save presets and back up settings, profiles and stats.

![Appearance settings in Aurora with top tabs](docs/screenshots/v2.8.0/appearance.png)

### Stream Extras

- Review session history, personal bests and 20 achievements in **Stats**.
- BO1 and BO2 include a configurable zombie counter and a small website watermark. Hosts can enter `say !redrumhud` to adjust the HUD for the current match.

![Achievements in the Solarized Light theme](docs/screenshots/v2.8.0/achievements.png)

---

## 📦 Installation

1. Download the v2.8.0 ZIP from [Releases](https://github.com/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases).
2. Close the game and the tool, including its tray icon. Unzip the download and run the Setup executable.
3. Open the tool. Compatible v2.7.0 settings, profiles, presets and stats carry over. If the tool offers **Update game files**, accept it with the game closed.

The guided tour opens on first launch. Replay it from **Help > Start guided tour**.

If you use OBS text sources from 2.7.0, open **Settings > TTS and OBS > Copy OBS folder path** and point those sources to the new folder.

## 🛠️ Game Setup

![Game Setup in the Glacier theme](docs/screenshots/v2.8.0/setup.png)

1. Select your game. If you customise keys or gifts, save them in **Actions & Gifts**. Open **Setup**, click **Find game folders**, then **Install game files**.
2. For **BO3**, load the [Sphynx Console Commands mod](https://steamcommunity.com/sharedfiles/filedetails/?id=2860310766). For **BO1 or BO2**, host the lobby and start a fresh match after updating the script.
3. Use windowed or borderless display mode and run the console command in the table above.
4. Test a key with **Test Max Ammo bind** in Setup, then switch back to Zombies within three seconds.
5. On **Live**, enter your TikTok username. Start your stream, then click **Connect to TikTok**. Game input starts enabled. Turn it off to watch events in the dashboard without sending keys.

## 🎮 How Viewers Interact

| Event | What happens |
|---|---|
| Likes | Earn points or trigger bonus spins at your configured thresholds |
| Gifts | Trigger the mapped action |
| `!spin` in chat | Rolls an effect from your weighted wheel, subject to cooldowns |

Change rewards and cooldowns in **Settings > Gameplay**.

---

## 🔍 Troubleshooting

<details>
<summary><b>Game actions are missing or a bind changed</b></summary>

- Check the game profile, the game window, and **Enable game input**.
- If you changed a key, click **Save profile**, reinstall the game files, and run the console command again.
- Use **Find game folders** if Setup highlights a folder in red. Restart the match if you replaced a Plutonium script.

</details>

<details>
<summary><b>TikTok connection or voice problems</b></summary>

- Make sure you're already live on TikTok and have entered the correct username.
- For speech, check **Mute speech**, your selected voice and the volume under **Settings > TTS and OBS**. Use **Test voice** to check playback.
- For a bug report, use **Copy diagnostics** or save the session log from **Diagnostics**. Include your game, app version and the action that failed.

</details>

## ❌ Uninstall

Open **Windows Settings > Apps**, find **RedruM's Interactive Zombies Tool**, and choose **Uninstall**. Saved settings and stats are kept for a future reinstall.

---

## 💡 Why I Made This

I built this for my own interactive BO3 Zombies streams while teaching myself to program. It's free forever so anyone can try interactive streaming.

## 📬 Contact

| Platform | Link |
|---|---|
| Website | [redrumtools.com](https://redrumtools.com/) |
| Discord | [RedsHUB](https://discord.gg/VFeZVGtBA7) |
| TikTok | [@redrum.au](https://tiktok.com/@redrum.au) |
| Support development | [Ko-fi](https://ko-fi.com/redrumau) |

See [CHANGELOG.md](CHANGELOG.md) for the full list of changes.
