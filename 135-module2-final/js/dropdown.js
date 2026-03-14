export const dropdown = () => {
	const dropdownItems = document.querySelectorAll(".menu__item--has-dropdown");

	if (!dropdownItems.length) return;

	dropdownItems.forEach((item) => {
		const toggle = item.querySelector(".menu__dropdown-toggle");

		if (!toggle) return;

		toggle.addEventListener("click", (event) => {
			event.preventDefault();
			const isOpen = item.classList.contains("menu__item--dropdown-open");

			dropdownItems.forEach((i) =>
				i.classList.remove("menu__item--dropdown-open"),
			);

			if (!isOpen) {
				item.classList.add("menu__item--dropdown-open");
			}
		});
	});

	document.addEventListener("click", (event) => {
		if (!event.target.closest(".menu__item--has-dropdown")) {
			dropdownItems.forEach((i) =>
				i.classList.remove("menu__item--dropdown-open"),
			);
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			dropdownItems.forEach((i) =>
				i.classList.remove("menu__item--dropdown-open"),
			);
		}
	});
};
