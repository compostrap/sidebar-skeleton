/*!
 * Sidebar for Bootstrap
 * Copyright Zdeněk Papučík
 * MIT License
 */
export class Sidebar {
	static init() {
		const sidebar = document.getElementById("sidebar");
		const navigation = document.getElementById("navigation");
		const backdrop = document.createElement("div");

		backdrop.className = "sidebar-backdrop";

		if (sidebar && navigation) {
			navigation.after(backdrop);

			const close = () => {
				navigation.classList.remove("sidebar-toggle");
				backdrop.classList.remove("show");
			};
			const media = window.matchMedia("(min-width: 768px)");

			sidebar.addEventListener("click", () => {
				navigation.classList.toggle("sidebar-toggle");
				backdrop.classList.toggle("show", navigation.classList.contains("sidebar-toggle"));
			});

			backdrop.addEventListener("click", close);
			media.addEventListener("change", (event) => {
				if (event.matches) {
					close();
				}
			});
		}
	}
}
