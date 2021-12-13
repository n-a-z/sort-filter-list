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
					<p class="container__client">
						<strong>Name:</strong> ${client.name}, 
						<strong>Country:</strong> ${client.country}, 
						<strong>Industry:</strong> ${client.industry}, 
						<strong>Number of Employees:</strong> ${client.numberOfEmployees}
					</p>
					`;
				})
				.join('');
			//console.log(dataToHtml);
			document.querySelector('#data').innerHTML = dataToHtml;
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

getData();
