export function formatTime(date, length = 16) {
	date = new Date(+new Date(date) + 8 * 3600 * 1000);
	return date
		.toJSON()
		.substr(0, length)
		.replace("T", " ");
}