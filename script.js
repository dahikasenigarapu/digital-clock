let is24HourFormat = true; // Start with 24-hour format

const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const toggleButton = document.getElementById("toggle-format");

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let day = now.getDate();
  let month = now.getMonth() + 1; // Months are 0-based
  let year = now.getFullYear();

  // Format the time to be two digits (e.g., 09 instead of 9)
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Check if it's 12-hour format
  if (!is24HourFormat) {
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // Show 12 instead of 0 for midnight
    timeElement.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
  } else {
    timeElement.innerText = `${hours}:${minutes}:${seconds}`;
  }

  // Format the date
  dateElement.innerText = `${month}/${day}/${year}`;
}

// Toggle between 12-hour and 24-hour format
toggleButton.addEventListener("click", () => {
  is24HourFormat = !is24HourFormat;
  updateClock(); // Update the time when toggled
});

// Initialize the clock
setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Call once to show time immediately on load
