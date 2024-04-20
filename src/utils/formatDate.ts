export function formatDate(date: Date) {
	if (!date) {
		return ""; // Handle invalid dates gracefully
	}

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
	return formattedDate;
}