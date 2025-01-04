
# BookmarkShortcuts Chrome Extension

## What It Does
The **BookmarkShortcuts Chrome Extension** allows you to quickly open your bookmarks in Chrome using keyboard shortcuts. By pressing predefined shortcut keys (e.g., **Alt+1**, **Alt+2**, etc.), you can open the corresponding bookmarks directly from the Chrome bookmarks bar.

### Key Features:
- **Quick Access:** Open your bookmarks by pressing keyboard shortcuts.
- **Customizable Shortcuts:** Set your preferred keyboard shortcuts.
- **Lightweight:** Runs in the background with minimal memory usage.

## Steps to Run the Extension Locally

### Step 1: Download the Extension Files
Download or clone this repository to your local machine.

### Step 2: Enable Developer Mode in Chrome
1. Open Chrome and navigate to **chrome://extensions**.
2. In the top-right corner of the page, toggle the **Developer Mode** switch to **ON**.

### Step 3: Load the Extension into Chrome
1. After enabling Developer Mode, click on the **Load unpacked** button.
2. In the dialog that opens, navigate to the folder where you saved the extension files and select it.
   - The folder should contain `manifest.json`, `background.js`, `popup.html`, and other necessary files.
3. Your extension should now be loaded and visible in the Chrome extension list.

### Step 4: Set Keyboard Shortcuts
1. Go to **chrome://extensions/shortcuts** in Chrome.
2. Here, you can set the keyboard shortcuts for the extension. The available actions will be listed under **BookmarkShortcuts**.
   - For example, set **Alt+1** to open the first bookmark, **Alt+2** to open the second bookmark, and so on.

### Step 5: Test the Extension
- After setting the shortcuts, you can test them by pressing the assigned keys (e.g., **Alt+1**, **Alt+2**). This should open the corresponding bookmarks in Chrome.

---

## Additional Information

- The extension only works if you have the Chrome bookmarks bar enabled and have bookmarks saved in the bookmarks bar.
- This extension is not published on the Chrome Web Store. It's a local extension for personal use.

---

