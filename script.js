var time = document.getElementById("time");
var date = document.getElementById("date");

function update() {
  // Updating Current Date
  var currentDate = new Date();
  var dd = currentDate.getDate();
  var mm = currentDate.getMonth();
  var yy = currentDate.getFullYear();
  date.innerHTML = dd + "-" + mm + "-" + yy;

  //   Updating Current Time
  var hours = currentDate.getHours();
  var min = currentDate.getMinutes();
  var sec = currentDate.getSeconds();
  time.innerHTML = hours + ":" + min + ":" + sec;
}
