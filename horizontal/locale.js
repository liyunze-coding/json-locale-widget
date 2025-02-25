const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

function updateTime() {
    const now = new Date();
    timeElement.innerText = now.toLocaleTimeString();
    dateElement.innerText = now.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

document.addEventListener("DOMContentLoaded", () => {
    updateTime();
    setInterval(updateTime, 1000);
});