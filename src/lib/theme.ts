// The colour scheme is held in one place: the `data-theme` attribute on <html>.
// app.html resolves it before the first paint, the palette in app.css keys off
// it, and this is the only thing that writes to it afterwards.
//
// Deliberately not a Svelte store. The site prerenders, so a store's value
// during SSR would be a guess, and anything rendered from that guess would
// mismatch on hydration. Instead the toggle renders both icons and lets CSS
// pick, which means no component needs to read the current scheme at all.

export type Theme = 'light' | 'dark';

function current(): Theme {
	return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function toggleTheme() {
	const next: Theme = current() === 'dark' ? 'light' : 'dark';
	document.documentElement.dataset.theme = next;

	// Storage throws in private mode in some browsers. A visitor who hits that
	// still gets the toggle for this page; it just will not be remembered.
	try {
		localStorage.setItem('theme', next);
	} catch {
		/* not remembered, still switched */
	}
}
