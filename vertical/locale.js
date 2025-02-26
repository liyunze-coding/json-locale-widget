function updateTime(timeElement, dateElement) {
	let date = new Date();
	let time = date.toLocaleTimeString();
	let formattedDate = date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});

	timeElement.innerText = time;
	dateElement.innerText = formattedDate;
}

document.addEventListener("DOMContentLoaded", () => {
	const timeElement = document.querySelector("#time");
	const dateElement = document.querySelector("#date");

	updateTime(timeElement, dateElement);
	setInterval(function () {
		updateTime(timeElement, dateElement);
	}, 1000);
});
