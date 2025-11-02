//challenge 2
let hawaiiTime = moment()
  .tz("Pacific/Honolulu")
  .format("dddd, MMMM D, YYYY h:mm A");
let hawaiiTimeElement = document.querySelector("#current-date");
hawaiiTimeElement.innerHTML = `It is ${hawaiiTime} in Honolulu, Hawaii`;

//challenge 3
let parisTime = moment()
  .tz("Europe/Paris")
  .add(10, "years")
  .format("dddd, MMMM D, YYYY h:mm A");
let parisTimeElement = document.querySelector("#future-date");
parisTimeElement.innerHTML = `10 years from now, it will be ${parisTime} in Paris, France`;

//challenge 4
let localTimezone = moment.tz.guess();
let localElement = document.querySelector("#local-time-zone");
localElement.innerHTML = `The current time zone is ${localTimezone}`;
