let sortNameAsc = document.getElementById('sortNameAsc');
let sortNameDesc = document.getElementById('sortNameDesc');
let sortEmpAsc = document.getElementById('sortEmpAsc');
let sortEmpDesc = document.getElementById('sortEmpDesc');

sortNameAsc.addEventListener('click', sortTableName);
sortNameDesc.addEventListener('click', sortTableNameDesc);
sortEmpAsc.addEventListener('click', sortTableEmp);
sortEmpDesc.addEventListener('click', sortTableEmpDesc);

function sortTableName() {
	let table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById('data');
	switching = true;

	while (switching) {
		switching = false;
		rows = table.rows;
		for (i = 1; i < rows.length - 1; i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName('TD')[0];
			y = rows[i + 1].getElementsByTagName('TD')[0];

			if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

function sortTableNameDesc() {
	let table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById('data');
	switching = true;

	while (switching) {
		switching = false;
		rows = table.rows;
		for (i = 1; i < rows.length - 1; i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName('TD')[0];
			y = rows[i + 1].getElementsByTagName('TD')[0];

			if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

function sortTableEmp() {
	let table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById('data');
	switching = true;

	while (switching) {
		switching = false;
		rows = table.rows;

		for (i = 1; i < rows.length - 1; i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName('TD')[3];
			y = rows[i + 1].getElementsByTagName('TD')[3];

			if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

function sortTableEmpDesc() {
	let table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById('data');
	switching = true;

	while (switching) {
		switching = false;
		rows = table.rows;

		for (i = 1; i < rows.length - 1; i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName('TD')[3];
			y = rows[i + 1].getElementsByTagName('TD')[3];

			if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}
