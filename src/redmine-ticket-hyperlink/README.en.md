# Redmine ticket copy for Spreadsheet

[English](README.en.md) - [日本語](README.ja.md) - [Tiếng Việt](README.md)

Bookmarklet Name: **RedmineHyperlink**

This is a bookmarklet used to copy basic information about a Redmine ticket (including ticket ID and ticket URL) on the currently open Redmine ticket page.

The result saved to the clipboard has the following format and is used for pasting into Google Spreadsheet, Microsoft Excel to create links.
```
=HYPERLINK("https://detomo.cloud.redmine.jp/issues/21814", "21814")
```

The code is stored in the file [bookmarklet.js](bookmarklet.js)

For installation and usage instructions of the bookmarklet, see details [here](../../README.en.md).
