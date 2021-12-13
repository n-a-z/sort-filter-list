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
					<li class="container__client">
						<ul class="container__client-data">
							<li class="container_client-name"><strong>Name:</strong> ${client.name}</li>
							<li class="container_client-country"><strong>Country:</strong> ${client.country}</li>
							<li class="container_client-industry"><strong>Industry:</strong> ${client.industry}</li>
							<li class="container_client-employees"><strong>Number of Employees:</strong> ${client.numberOfEmployees}</li>
						</ul>
					</li>
					`;
				})
				.join('');
			//console.log(dataToHtml);
			// document.querySelector('#data').innerHTML = dataToHtml;
			document.querySelector('#data').insertAdjacentHTML('beforeend', dataToHtml);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

getData();
