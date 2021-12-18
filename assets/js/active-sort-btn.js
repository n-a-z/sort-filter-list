const sortBtn = document.querySelectorAll('.sort__btn');

sortBtn.forEach((item) => {
	item.addEventListener(
		'click',
		() => {
			if (document.querySelector('.sort__btn--active')) {
			document.querySelector('.sort__btn--active').classList.remove('sort__btn--active');
			}
			item.classList.add('sort__btn--active');
		},
		false
	);
});
