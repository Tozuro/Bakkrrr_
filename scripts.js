// 1) Set the current year in the footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// 2) Show the current time inside the Goals section
const timeText = document.getElementById("timeText");

function updateTime() {
  const now = new Date();
  timeText.textContent = "Local time: " + now.toLocaleString();
}

// run once when page loads
updateTime();

// update every 30 seconds
setInterval(updateTime, 30000);

