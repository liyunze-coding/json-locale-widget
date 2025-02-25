function displayTime() {
	let date = new Date();
	let time = date.toLocaleTimeString();
	let formattedDate = date.toLocaleDateString("en-UK", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});

	document.querySelector("#time").innerText = time;
	document.querySelector("#date").innerText = formattedDate;
}

displayTime();
setInterval(function () {
	displayTime();
}, 1000);
