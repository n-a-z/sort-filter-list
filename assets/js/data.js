const myUrl = new Request(
	'https://dujour.squiz.cloud/developer-challenge/data'
);

async function getData() {
	fetch(myUrl)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			//console.log(data);

			const dataToHtml = data
				.map((client) => {
					return `
					<tr class="container__client" id="clients">
						<span class="container__client-data">
							<td class="container__table-cell container__client-name><span class="container__client-value">${client.name}<span></td>
							<td class="container__table-cell container__client-country"><span class="container__client-value">${client.country}<span></td>
							<td class="container__table-cell container__client-industry"><span class="container__client-value">${client.industry}<span></td>
							<td class="container__table-cell container__client-employees><span class="container__client-value">${client.numberOfEmployees}<span></td>
						</span>
					</tr>
					`;
				})
				.join('');
			//console.log(dataToHtml);
			// document.querySelector('#data').innerHTML = dataToHtml;
			document
				.querySelector('#data')
				.insertAdjacentHTML('beforeend', dataToHtml);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

getData();
