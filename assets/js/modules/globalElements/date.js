const { DateTime } = require("luxon");
var dt = DateTime.now();
var f = {month: 'long', day: 'numeric'};
let myDt = dt.setLocale('en-US').toLocaleString(f);  //=> 'September 14'
//date.innerHTML = `<small>${Date()}</small>`;
date.innerHTML = `<small>${myDt}</small>`;


//See date time duration for object creating (${duration} ago)