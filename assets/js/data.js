const myUrl = new Request(
	'https://dujour.squiz.cloud/developer-challenge/data'
);

async function getData() {
	fetch(myUrl)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const dataToHtml = data
				.map((client) => {
					return `
					<tr class="list__row client">
							<td class="list__cell client__name><span class="client__value">${client.name}<span></td>
							<td class="list__cell client__country"><span class="client__value">${client.country}<span></td>
							<td class="list__cell client__industry"><span class="client__value">${client.industry}<span></td>
							<td class="list__cell client__employees"><span class="client__value">${client.numberOfEmployees}<span></td>
					</tr>
					`;
				})
				.join('');

			document
				.querySelector('#data')
				.insertAdjacentHTML('beforeend', dataToHtml);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

getData();
