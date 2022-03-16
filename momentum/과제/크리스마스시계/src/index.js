const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  var ChristMasDate = new Date(2022, 12, 24);
  var today = new Date(year, month, day);

  var btMs = ChristMasDate.getTime() - today.getTime();
  var btDay = btMs / (1000 * 60 * 60 * 24);

  clockTitle.innerText = `${btDay}d ${hours}h ${minutes}m ${seconds}s`;
}
getClock();
setInterval(getClock, 1000);
