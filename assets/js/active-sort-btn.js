const sortBtn = document.querySelectorAll('.sort__btn');

sortBtn.forEach((item) => {
	item.addEventListener(
		'click',
		() => {
			if (document.querySelector('.sort__btn--active')) {
			document.querySelector('.sort__btn--active').classList.remove('sort__btn--active');
			}
			if (document.querySelector('.sort__btn--up-down')) {
			document.querySelector('.sort__btn--up-down').classList.remove('sort__btn--up-down');
			}
			item.classList.add('sort__btn--active');
			item.classList.add('sort__btn--up-down');
		},
		false
	);
});
