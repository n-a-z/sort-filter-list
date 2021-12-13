let filterCountry = document.getElementById('filterCountry');
let filterIndustry = document.getElementById('filterIndustry');
//console.log(filterCountry);
filterCountry.addEventListener('keyup', filterCountries);
filterIndustry.addEventListener('keyup', filterIndustries);

function filterCountries() {
	let filterValue = document.getElementById('filterCountry').value.toLowerCase();
	//console.log(filterValue);

	let clientsList = document.getElementById('data');
	let clientsUL = clientsList.querySelectorAll('ul.container__client-data');
	let clientsULContainer = clientsList.querySelectorAll('li.container__client');
	let clientsLi = clientsList.querySelectorAll('li.container_client-country');

	for (let i = 0; i < clientsLi.length; i++) {
		let span = clientsLi[i].getElementsByTagName('span')[0];
		//console.log(span);
		if (span.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
			clientsULContainer[i].style.display = '';
		} else {
			clientsULContainer[i].style.display = 'none';
		}
	}
}

function filterIndustries() {
	let filterValue = document.getElementById('filterIndustry').value.toLowerCase();
	//console.log(filterValue);

	let clientsList = document.getElementById('data');
	let clientsUL = clientsList.querySelectorAll('ul.container__client-data');
	let clientsULContainer = clientsList.querySelectorAll('li.container__client');
	let clientsLi = clientsList.querySelectorAll('li.container_client-industry');

	for (let i = 0; i < clientsLi.length; i++) {
		let span = clientsLi[i].getElementsByTagName('span')[0];
		//console.log(span);
		if (span.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
			clientsULContainer[i].style.display = '';
		} else {
			clientsULContainer[i].style.display = 'none';
		}
	}
}
