//Challenge 1//
function getDate() {
  let currentDate = document.querySelector("#date");
  currentDate.innerHTML = new Date();
}
setTimeout(getDate, 5000);

//Challenge 2 //
function getMilliseconds() {
  let now = new Date();
  let currentMilliseconds = document.querySelector("#milliseconds");
  currentMilliseconds.innerHTML = now.getMilliseconds();
}
setInterval(getMilliseconds, 1);
