function displayTime() {
	let date = new Date();
	let time = date.toLocaleTimeString();
	let current_day = date.toLocaleDateString("en-UK", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});

	document.getElementById("time").innerText = time;
	document.getElementById("date").innerText = current_day;
}

displayTime();
setInterval(function () {
	displayTime();
}, 1000);
