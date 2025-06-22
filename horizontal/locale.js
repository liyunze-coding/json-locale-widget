function updateTime(timeElement, dateElement) {
	let currentDate = dayjs();
	let time = currentDate.format("h:mm:ss A");
	let date = currentDate.format("YYYY-MM-DD");

	timeElement.innerText = time;
	dateElement.innerText = date;
}

document.addEventListener("DOMContentLoaded", () => {
	const timeElement = document.querySelector("#time");
	const dateElement = document.querySelector("#date");

	updateTime(timeElement, dateElement);
	setInterval(function () {
		updateTime(timeElement, dateElement);
	}, 1000);
});
