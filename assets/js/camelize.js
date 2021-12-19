function camelize(str) {
	return str
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}
