# Joplin Discord Rich Presence Plugin
A simple plugin to show the current note that you are editing in Joplin as your Discord status

## Installation
- To install the plugin, download the `jpl` file from the [latest release](https://github.com/arash28134/joplin-discord-rich-presence/releases/latest). 

- Then open Joplin ---> Tools ---> Options ---> Plugins ---> Gear icon ---> Install from file ---> Select the `jpl` file  

- Restart Joplin for changes to take effect.

## Building the plugin

- To build the plugin, simply run:
  ```
  npm run dist
  ```

## Current issues
We currently have no way of detecting whether the app's window is open or it's minimized to tray, so even if the app is minimized, your status is gonna show as editing your last note.
