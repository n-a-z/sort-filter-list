function sortTable() {
	const getCellValue = (tr, idx) =>
		tr.children[idx].innerText || tr.children[idx].textContent;

	const comparer = (idx, asc) => (a, b) =>
		((v1, v2) =>
			v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)
				? v1 - v2
				: v1.localeCompare(v2))(
			getCellValue(asc ? a : b, idx),
			getCellValue(asc ? b : a, idx)
		);

	document.querySelectorAll('.sort__btn').forEach((sort__btn) =>
		sort__btn.addEventListener('click', () => {

			document.querySelectorAll('th').forEach((th) => {
				if (sort__btn.innerText.toLowerCase() === th.innerText.toLowerCase()) {
					const table = document.getElementById('data');

					Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
						.sort(
							comparer(
								Array.from(th.parentNode.children).indexOf(th),
								(this.asc = !this.asc)
							)
						)
						.forEach((tr) => table.appendChild(tr));
				}
			});
		})
	);
}

sortTable();
