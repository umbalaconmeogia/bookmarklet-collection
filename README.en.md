# Bookmarklet Collection

[English](README.en.md) - [日本語](README.ja.md) - [Tiếng Việt](README.md)

A collection of useful bookmarklets for extracting information or manipulating web pages to increase productivity.

## What is a Bookmarklet?

A **Bookmarklet** is a piece of code that is added to your web browser as a *bookmark*. It helps you perform operations on the content of the web page you're viewing, such as extracting information or filling in data.

Using bookmarklets, you only need a single mouse click to perform complex tasks.

## Available Bookmarklet Collection

* [Redmine Ticket Copy](src/redmine-ticket-copy): Copy information from a Redmine ticket to paste into documents.
* [Redmine Ticket for Slack](src/redmine-ticket-copy-markdown): Copy information from a Redmine ticket, formatted as Markdown (can be used in Slack).

## How to Use

1. **Add to bookmark**: Copy the bookmarklet code and create a bookmark
2. **Usage**: When on any web page, click the bookmark (on the bookmark bar) to run the bookmarklet

### Usage Instructions

When you have a web page open, click on the bookmarklet from the bookmark bar.

Example:
1. Open a Redmine ticket page (e.g., `https://detomo.cloud.redmine.jp/issues/21814`).
2. Click the `Redmine Copy Ticket` bookmark from the Bookmarks Menu or Bookmarks Bar.
  ![Redmine Ticket Copy bookmarklet](docs/images/RedmineTicketCopyButton.png)
3. The code will run and copy content like:
   ```
   Feature #21814: Test - ticket - với - hyphen -
   https://detomo.cloud.redmine.jp/issues/21814
   ```
   to the clipboard and display an alert "Copied to clipboard!".

### Adding to Bookmarks

To save the bookmarklet code to your bookmarks, follow these steps:

#### On Google Chrome
1. Open Chrome and go to any page (or a Redmine ticket page to try immediately).
2. Copy the entire bookmarklet code (including `javascript:`):
   Example
   ```javascript
   javascript:(function() {
      const heading = document.querySelector('#sticky-issue-header .issue-heading')?.innerText || '';
      const title = document.querySelector('#sticky-issue-header .subject')?.innerText || '';
      const url = window.location.href;
      const formatted = `${heading} ${title}\n${url}`;
      navigator.clipboard.writeText(formatted).then(() => {
         const div = document.createElement('div');
         div.textContent = 'Copied to clipboard!';
         div.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #4CAF50; color: white; padding: 10px 20px; border-radius: 5px; z-index: 9999; opacity: 1; transition: opacity 1s ease-in-out;';
         document.body.appendChild(div);
         setTimeout(() => { div.style.opacity = '0'; }, 2000);
         setTimeout(() => { div.remove(); }, 3000);
      });
   })();
   ```
3. Open **Bookmark Manager**:
   - Press `Ctrl + Shift + O` (Windows) or `Cmd + Shift + O` (Mac).
   - Or: Three-dot menu → **Bookmarks and lists** → **Manage bookmarks**.
4. Create a new bookmark:
   - Click the three-dot menu in Bookmark Manager → **Add new bookmark**.
   - **Name**: `Redmine Copy Ticket`.
   - **URL**: Paste the bookmarklet code into the URL field.
5. Click **Save**.
6. (Optional) Drag the bookmark to the Bookmarks Bar for quick access.

#### On Firefox
1. Open Firefox and copy the bookmarklet code as above.
2. Open **Bookmarks**:
   - Press `Ctrl + Shift + O` or Three-line menu → **Bookmarks** → **Manage bookmarks**.
3. Create bookmark:
   - In **Bookmarks Menu**, click **Add Bookmark**.
   - **Name**: `Redmine Copy Ticket`.
   - **Location**: Paste the bookmarklet code.
4. Click **Save**.

#### On Microsoft Edge or Safari
- Similar to Chrome, open Bookmark/Favorites Manager, create a new bookmark, paste the code into the URL field, and save with a name like `Redmine Copy Ticket`.
