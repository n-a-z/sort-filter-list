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
					<li class="container__client" id="clients">
						<ul class="container__client-data">
							<li class="container_client-name"><strong>Name:</strong> <span class="container__client-value">${client.name}<span></li>
							<li class="container_client-country"><strong>Country:</strong> <span class="container__client-value">${client.country}<span></li>
							<li class="container_client-industry"><strong>Industry:</strong> <span class="container__client-value">${client.industry}<span></li>
							<li class="container_client-employees"><strong>Number of Employees:</strong> <span class="container__client-value">${client.numberOfEmployees}<span></li>
						</ul>
					</li>
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
