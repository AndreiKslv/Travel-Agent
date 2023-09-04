import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperCode() {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 4,
		spaceBetween: 32,
		navigation: {
		  nextEl: '.swiper-btn-next',
		  prevEl: '.swiper-btn-prev',
		},

		breakpoints: {
			0: {
			  slidesPerView: 1,
			  spaceBetween: 16,
			  centeredSlides: true,
			},
			576: {
			  slidesPerView: 2,
			  spaceBetween: 16,
			  centeredSlides: false,
			},
			768: {
			  slidesPerView: 3,
			  spaceBetween: 16,
			},
			1200: {
			  slidesPerView: 4,
			  spaceBetween: 32,
			},
			1400: {
			  slidesPerView: 5,
			  spaceBetween: 32,
			},
		  },
	});
}

export default swiperCode