function burgerMenu() {
	const burgerMenu = document.querySelector('.burger-menu')
	const headerContent = document.querySelector('.header__content')
	const burgerMenuList = document.querySelector('.burger-menu__list')
	const body = document.querySelector('body')
	burgerMenu.addEventListener('click', function() {
		burgerMenu.classList.toggle('active')
		headerContent.classList.toggle('active')
		body.classList.toggle('no-scroll')
	})

	burgerMenuList.addEventListener('click', function(e) {
		if (e.target.dataset.menu === 'burger-link') {
			burgerMenu.classList.remove('active')
			headerContent.classList.remove('active')
		}
	})
}


export default burgerMenu