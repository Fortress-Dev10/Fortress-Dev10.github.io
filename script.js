const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const container = document.querySelector(".container");
const currentDayOfTheWeek = container.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTime = container.querySelector(
  '[data-testid="currentUTCTime"]'
);

// Function to update the day and time
function updateTime() {
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getUTCDay()];
  const timeMilliseconds = now.getTime(); // Get UTC time in milliseconds

  currentDayOfTheWeek.textContent = ` ${dayOfWeek}`;
  currentUTCTime.textContent = ` ${timeMilliseconds}`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time
updateTime();
