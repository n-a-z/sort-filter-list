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
	let clientsContainer = clientsList.querySelectorAll('tr.client');
	let clientsLiCountry = clientsList.querySelectorAll('td.client__country');
	let clientsLiIndustry = clientsList.querySelectorAll('td.client__industry');

	for (let i = 0; i < clientsContainer.length; i++) {
		let spanCountry = clientsLiCountry[i].getElementsByTagName('span')[0];
		let spanIndustry = clientsLiIndustry[i].getElementsByTagName('span')[0];

		if (
			spanCountry.innerHTML.toLowerCase().indexOf(filterValueCountry) > -1 &&
			spanIndustry.innerHTML.toLowerCase().indexOf(filterValueIndustry) > -1
		) {
			clientsContainer[i].style.display = '';
		} else {
			clientsContainer[i].style.display = 'none';
		}
	}
}
