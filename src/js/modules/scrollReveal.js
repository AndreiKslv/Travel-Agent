import ScrollReveal from 'scrollreveal'

function scrollRevealCode() {
	ScrollReveal({
		distance: '60px',
		duration: 2800,
		// reset: true,
	})

	ScrollReveal().reveal('.header', {
		origin: 'top',
		delay: 100,
	})
	
	ScrollReveal().reveal('.promo__title-block', {
		distance: '120px',
		origin: 'left',
		delay: 500,
	})

	ScrollReveal().reveal('.promo__img-main', {
		origin: 'right',
		delay: 2000,
	})

	ScrollReveal().reveal('.promo__hint', {
		origin: 'left',
		delay: 4000,
	})

	ScrollReveal().reveal('.promo__scroll-down', {
		origin: 'right',
		delay: 4500,
	})

	ScrollReveal().reveal('.promo__text', {
		origin: 'bottom',
		delay: 3000,
	})

	ScrollReveal().reveal('.promo__form', {
		origin: 'bottom',
		delay: 6000,
	})

	// Partners

	ScrollReveal().reveal('.partners', {
		origin: 'bottom',
		delay: 500,
	})

	// Destinations

	ScrollReveal().reveal('.destinations__title', {
		origin: 'bottom',
		delay: 500,
	})

	ScrollReveal().reveal('.destinations__text', {
		origin: 'bottom',
		delay: 1000,
	})

	ScrollReveal().reveal('.swiper-buttons', {
		origin: 'right',
		delay: 2500,
	})

	ScrollReveal().reveal('.swiper', {
		distance: '1000px',
		origin: 'right',
		delay: 2500,
	})
}

export default scrollRevealCode
