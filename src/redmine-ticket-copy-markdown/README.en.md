# Redmine ticket copy

[English](README.en.md) - [日本語](README.ja.md) - [Tiếng Việt](README.md)

This is a bookmarklet used to copy basic information about a Redmine ticket (including tracker information, ticket ID, title, and ticket URL) on the currently open Redmine ticket page.

The result is formatted in Markdown, saved to the clipboard, and used for pasting into software that supports Markdown text formatting like Slack.
```
[Feature #21814: Test - ticket - với - hyphen -](https://detomo.cloud.redmine.jp/issues/21814)
```

The code is stored in the file [bookmarklet.js](bookmarklet.js)

For installation and usage instructions of the bookmarklet, see details [here](../../README.en.md).

### Instructions to Enable Markdown Support in Slack

To enable Markdown support (specifically the `[text](url)` syntax to create hyperlinks) in Slack, you need to enable **Format messages with markup** in settings. Below is a detailed step-by-step guide to enable this feature:

#### On Slack Desktop (Windows/Mac)
1. **Open Slack**: Open the Slack application on your computer or access it via browser at `app.slack.com`.
2. **Go to Preferences**:
   - **Windows/Linux**: Click on your workspace name in the top left corner, then select **Preferences** from the menu.
   - **Mac**: Click on **Slack** in the menu bar at the top of the screen, then select **Preferences**.
   - Keyboard shortcut: Press `Ctrl + ,` (Windows/Linux) or `Cmd + ,` (Mac) to quickly open Preferences.
3. **Navigate to Advanced tab**:
   - In the Preferences window, click on the **Advanced** tab (usually located at the end of the tab list).
4. **Enable Format messages with markup**:
   - Find the **Format messages with markup** option.
   - Check this box to enable Markdown mode instead of the WYSIWYG editor.
5. **Save and test**:
   - Close the Preferences window (changes are automatically saved).
   - Open a channel or DM in Slack, try typing Markdown syntax like `[Defect #21682](https://detomo.cloud.redmine.jp/issues/21682)` and send the message.
   - If enabled successfully, Slack will render it as a hyperlink: [Defect #21682](https://detomo.cloud.redmine.jp/issues/21682).

### Notes
- **Markdown effectiveness**: When **Format messages with markup** is enabled, Slack supports standard Markdown syntax like `[text](url)` to create links, as well as other formatting (`*bold*`, `_italic_`, etc.). However, the WYSIWYG interface (formatting toolbar) will be hidden, and you need to type syntax manually.
- **Workspace restrictions**: Some admin-managed workspaces may lock this option. If you don't see the **Format messages with markup** option, contact the workspace admin to check.
- **Check Slack version**: Make sure you're using the latest version of Slack, as `[text](url)` support may depend on the client version.
- **Check rendering**: If `[text](url)` doesn't render as a link after sending, try:
  - Ensure correct syntax (no extra spaces, e.g., `[text](url)` not `[ text ]( url )`).
  - Turn off/on Markup mode again or log out/log back into Slack.
- If you can't use Markdown on Slack, you can use the [redmine-ticket-copy](../redmine-ticket-copy) bookmarklet as an alternative.
