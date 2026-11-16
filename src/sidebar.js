/*!
	** Sidebar for Bootstrap
	** Copyright Zdeněk Papučík
	** MIT License
	**/
export class Sidebar {
	static init() {
		const sidebar = document.getElementById('sidebar');
		const navigation = document.getElementById('navigation');

		if (!sidebar || !navigation || navigation.dataset.sidebarInitialized === 'true') {
			return;
		}

		navigation.dataset.sidebarInitialized = 'true';
		sidebar.setAttribute('aria-controls', navigation.id);

		const backdrop = document.createElement('div');
		backdrop.className = 'sidebar-backdrop';
		navigation.after(backdrop);

		const setExpanded = (expanded) => {
			sidebar.setAttribute('aria-expanded', String(expanded));
		};

		const media = window.matchMedia('(min-width: 768px)');
		const isOpen = () => navigation.classList.contains('sidebar-toggle');
		// below md the closed sidebar stands outside the window: it is inert there, so Tab does not walk through
		// links nobody sees and a screen reader does not read them
		const syncInert = () => {
			navigation.inert = !media.matches && !isOpen() && !navigation.classList.contains('sidebar-toggle-visible');
		};
		setExpanded(isOpen());
		backdrop.classList.toggle('show', isOpen());
		syncInert();

		const close = () => {
			navigation.classList.remove('sidebar-toggle');
			backdrop.classList.remove('show');
			setExpanded(false);
			syncInert();
		};

		sidebar.addEventListener('click', () => {
			const expanded = !isOpen();
			navigation.classList.toggle('sidebar-toggle', expanded);
			backdrop.classList.toggle('show', expanded);
			setExpanded(expanded);
			syncInert();
			// the opened sidebar of a phone takes the focus, so the keyboard and a screen reader go on in it
			if (expanded && !media.matches) {
				navigation.querySelector('a[href], button, [tabindex="0"]')?.focus({ preventScroll: true });
			}
		});
		// the focus that leaves the open sidebar of a phone (Tab after its last link) closes it, like a dropdown:
		// the page under the backdrop is not walked through with the sidebar over it
		document.addEventListener('focusin', (event) => {
			if (!media.matches && isOpen() && event.target !== sidebar && !navigation.contains(event.target)) {
				close();
			}
		});

		backdrop.addEventListener('click', () => {
			close();
			sidebar.focus();
		});
		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape' && isOpen()) {
				close();
				sidebar.focus();
			}
		});
		media.addEventListener('change', (event) => {
			if (event.matches) {
				close();
			}
			syncInert();
		});
	}
}
