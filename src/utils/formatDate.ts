export function formatDate(date: Date) {
	if (!date) {
		return ""; 
	}

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
	return formattedDate;
}