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

		const isOpen = () => navigation.classList.contains('sidebar-toggle');
		setExpanded(isOpen());
		backdrop.classList.toggle('show', isOpen());

		const close = () => {
			navigation.classList.remove('sidebar-toggle');
			backdrop.classList.remove('show');
			setExpanded(false);
		};
		const media = window.matchMedia('(min-width: 768px)');

		sidebar.addEventListener('click', () => {
			const expanded = !isOpen();
			navigation.classList.toggle('sidebar-toggle', expanded);
			backdrop.classList.toggle('show', expanded);
			setExpanded(expanded);
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
		});
	}
}
