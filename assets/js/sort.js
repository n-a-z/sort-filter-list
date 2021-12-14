let sortNameAsc = document.getElementById('sortNameAsc');
let sortNameDesc = document.getElementById('sortNameDesc');
let sortEmpAsc = document.getElementById('sortEmpAsc');
let sortEmpDesc = document.getElementById('sortEmpDesc');

sortNameAsc.addEventListener('click', sortTableName);
sortNameDesc.addEventListener('click', sortTableName);
sortEmpAsc.addEventListener('click', sortTableEmp);
sortEmpDesc.addEventListener('click', sortTableEmp);

function sortTableName(event) {
	let table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById('data');
	switching = true;

	while (switching) {
		switching = false;
		rows = table.rows;
		for (i = 1; i < rows.length - 1; i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName('td')[0];
			y = rows[i + 1].getElementsByTagName('td')[0];

			if (event.target.innerHTML === 'Asc') {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			} else if (event.target.innerHTML === 'Desc') {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

function sortTableEmp(event) {
	let table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById('data');
	switching = true;

	while (switching) {
		switching = false;
		rows = table.rows;

		for (i = 1; i < rows.length - 1; i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName('td')[3];
			y = rows[i + 1].getElementsByTagName('td')[3];

			if (event.target.innerHTML === 'Asc') {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			} else if (event.target.innerHTML === 'Desc') {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}
