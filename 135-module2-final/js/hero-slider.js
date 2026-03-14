export const heroSlider = () => {
	new Swiper(".hero__slider", {
		loop: true,
		speed: 700,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: ".hero__slider-button--prev",
			nextEl: ".hero__slider-button--next",
		},
		pagination: {
			el: ".hero__slider-pagination",
			clickable: true,
		},
	});
};
