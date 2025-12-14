// 1) So This Part is actually showing the current year at the bottom of the page
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// 2) And The second Part is showing the current time inside the Goals section
const timeText = document.getElementById("timeText");

function updateTime() {
  const now = new Date();
  timeText.textContent = "Local time: " + now.toLocaleString();
}

// Calling the function immediately 
updateTime();

// And this one is here to keep the time updated every 30s which is 30000ms
setInterval(updateTime, 30000);

