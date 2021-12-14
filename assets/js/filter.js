let filterCountry = document.getElementById('filterCountry');
let filterIndustry = document.getElementById('filterIndustry');

filterCountry.addEventListener('keyup', filterDouble);
filterIndustry.addEventListener('keyup', filterDouble);

function filterDouble() {
	let filterValueCountry = document
		.getElementById('filterCountry')
		.value.toLowerCase();
	let filterValueIndustry = document
		.getElementById('filterIndustry')
		.value.toLowerCase();

	let clientsList = document.getElementById('data');
	let clientsUL = clientsList.querySelectorAll('span.container__client-data');
	let clientsULContainer = clientsList.querySelectorAll('tr.container__client');
	let clientsLiCountry = clientsList.querySelectorAll(
		'td.container__client-country'
	);
	let clientsLiIndustry = clientsList.querySelectorAll(
		'td.container__client-industry'
	);

	for (let i = 0; i < clientsUL.length; i++) {
		let spanCountry = clientsLiCountry[i].getElementsByTagName('span')[0];
		let spanIndustry = clientsLiIndustry[i].getElementsByTagName('span')[0];

		if (
			spanCountry.innerHTML.toLowerCase().indexOf(filterValueCountry) > -1 &&
			spanIndustry.innerHTML.toLowerCase().indexOf(filterValueIndustry) > -1
		) {
			clientsULContainer[i].style.display = '';
		} else {
			clientsULContainer[i].style.display = 'none';
		}
	}
}
