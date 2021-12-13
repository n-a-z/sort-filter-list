const url = 'https://dujour.squiz.cloud/developer-challenge/data';

async function getData() {
	const response = await fetch(url).catch((error) => {
		console.error('Error:', error);
	});

	const data = await response.json();
	console.log('data', data);
}

getData();
