//Challenge 2
let today = moment().format("dddd, MMMM D, YYYY");
let todayElement = document.querySelector("#current-date");
todayElement.innerHTML = `Today is ${today}`;

//Challenge 3
let future = moment().add(10, "year").format("dddd, MMMM D, YYYY hh:mm:ss");
let futureElement = document.querySelector("#future-date");
futureElement.innerHTML = `10 years from now, it will be ${future}`;
