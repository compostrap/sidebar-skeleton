/*!
 * Sidebar for Bootstrap
 * Copyright Zdeněk Papučík
 * MIT License
 */
export class Sidebar {
	static init() {
		const sidebar = document.getElementById("sidebar");
		const navigation = document.getElementById("navigation");

		if (sidebar && navigation) {
			sidebar.addEventListener("click", () => {
				navigation.classList.toggle("sidebar-toggle");
			});
		}
	}
}
