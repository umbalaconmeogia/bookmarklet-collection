javascript:(function() {
    const heading = document.querySelector('#sticky-issue-header .issue-heading')?.innerText || '';
    const title = document.querySelector('#sticky-issue-header .subject')?.innerText || '';
    const url = window.location.href;
    const ticketIdMatch = heading.match(/#(\d+):/);
    const ticketId = ticketIdMatch ? ticketIdMatch[1] : heading;
    const formatted = '=HYPERLINK("' + url + '", "' + ticketId + '")';
    navigator.clipboard.writeText(formatted).then(() => {
        const div = document.createElement('div');
        div.textContent = 'Copied to clipboard!';
        div.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #4CAF50; color: white; padding: 10px 20px; border-radius: 5px; z-index: 9999; opacity: 1; transition: opacity 1s ease-in-out;';
        document.body.appendChild(div);
        setTimeout(() => { div.style.opacity = '0'; }, 2000);
        setTimeout(() => { div.remove(); }, 3000);
    });
})();