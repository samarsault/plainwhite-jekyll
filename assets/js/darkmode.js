const DARK_CLASS = 'dark';

function toggleDarkModeKey(event) {
    // Ignore all keypresses that are not spacebar and enter.
    if ((event.keyCode === 13) || (event.keyCode === 32)) {
        event.preventDefault()
        toggleDarkMode();
    }
}

function toggleDarkMode() {
    setDarkMode(!document.body.classList.contains(DARK_CLASS));
}

function setDarkMode(dark) {
    window.localStorage.setItem('theme', dark ? 'dark' : 'light');
    document.querySelectorAll('.dark-mode-toggle').forEach(ti => ti.classList.toggle("checked", dark));
    document.body.classList.toggle(DARK_CLASS, dark);
}

const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
var theme = window.localStorage.getItem('theme');
if ( (theme === null && userPrefersDark) || theme === 'dark') {
    // Attempt both requestAnimationFrame and DOMContentLoaded, whichever comes first.
    if (window.requestAnimationFrame) window.requestAnimationFrame(() => setDarkMode(true));
    window.addEventListener('DOMContentLoaded', () => setDarkMode(true));
}
