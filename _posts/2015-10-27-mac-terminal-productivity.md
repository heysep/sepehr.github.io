---
layout: post
title: Terminal Productivity Tips for (awesome) Developers 
---
These are some settings, keyboard shortcuts, and configs aimed for novice developers for making you a more productive (read awesome) software engineer.

Get them setup and internalized, at first they'll seem challenging as would any new habit. Gradually, they will begin to save you hours if not more. 

# Terminal (Mac)

## Keyboard Shortcuts

**This one alone will save you hours:**

- Move word by word: 

By default Mac Terminal has `esc + B` left movement and `esc + A` right movement.

**Better alternative for moving word by word:**

**Do this:** Configure `option + ←` and `option + →` in Terminal:

1. Open your Mac Terminal.
2. Open Terminal preferences: `cmd + ,`
3. At Settings tab, select Keyboard and double-click `⌥ ←` if it's there, or add it if it's not.
4. Set the modifier as desired, and type the shortcut key in the box: `esc+B`, generating the text `\033b` (you can't type this text manually).
![Backward movement settings]({{ site.url }}/assets/images/terminal-backward-move.png)
5. Repeat for word-right: `esc+F` becomes `\033f`.
![Forward movement settings]({{ site.url }}/assets/images/terminal-forward-move.png)

**To save even more time start using these:**

- Clear whole line before cursor: `ctrl + U`
- Clear whole line after cursor: `ctrl + K`
- Clear one word before cursor: `ctrl + W`
- Clear screen: `ctrl + L` or `cmd + K`
- Move to start of line: `ctrl + A`
- Move to end of line: `ctrl + E`
- Exit current shell: `ctrl + D`
- Kill current program: `ctrl + D`
- Search command history: `ctrl + R`
- Switch terminal window tabs:
	- Previous tab: `shift + cmd + [`
	- Next tab: `shift + cmd + ]`
- Open new tab: `cmd + t` 

## Themes
- The theme I use and recommend for the Terminal is [Smyck](http://color.smyck.org/).

# Mac Tips

These are Mac tips which will be very helpful especially if you're new to Mac.

## Mac Keyboard Shortcuts

- Close current tab: `cmd + W`
- Quit current app: `cmd + Q`
- Open new tab: `cmd + t`
- Move to start of line: `cmd + ←`
- Move to end of line: `cmd + →`
- Move to start of page: `cmd + ↑`
- Move to end of page: `cmd + ↓`
- Switch between open apps
	- Move forward: `cmd + tab`
	- Move backward: `cmd + shift + tab`
- Search your Mac: `cmd + space` (note: this is also a calculator)

## Chrome Keyboard Shortcuts

- Move tab forward: `ctrl + tab` 
- Move tab backward: `ctrl + shift + tab`
- Move to specific tab: `cmd + [num]` so for second tab: `cmd + 2`
- Move to last tab: `cmd + 9`
- Open Developer Tools: `option + cmd + I`

## ProTips

These are some configs I've find very helpful overtime. To use these suggestions go to Mac System Preferences. One really quick way to open Sys Prefs is to use the Spotlight Search: `cmd + space` then type: `sys` then hit `return`.

- Hot Corners
	- Set bottom right to Desktop (this is great for dragging things on and off Desktop).
	- Set top right to open Notifications.
	- Set bottom left to open apps Launchpad.
![Hot Corners Settings]({{ site.url }}/assets/images/hotcorners.png)

- Trackpad Speed
	- This can be challenging at first but maximizing your trackpad speed will allow you to move the cursor with less spacial movement.
![Trackpad Speed]({{ site.url }}/assets/images/trackpad.png)
- The Dock
	- Keep the dock clutter free by minimizing the number of apps in the dock. 
	- Any app can be quickly opened with `cmd + space` keyword `return`.
	- Make the dock size smaller and set it to automatically hide.
![Mac Dock Settings]({{ site.url }}/assets/images/dock.png)
	

External sources: 

- [Stack Overflow](https://stackoverflow.com/questions/81272/is-there-any-way-in-the-os-x-terminal-to-move-the-cursor-word-by-word/81299#81299)
- [Terminal Mac Cheatsheet](https://github.com/0nn0/terminal-mac-cheatsheet/wiki/Terminal-Cheatsheet-for-Mac-(-basics-))