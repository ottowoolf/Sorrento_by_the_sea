//generate first dya and last day of the month
var date = new Date(); // current date and time
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1); //the first day of the current month
var lastDay = new Date("December 31, 2021"); //the last day of the current month

//generate the dates

while (firstDay <= lastDay) {
  //create an option element
  var opt = document.createElement("option"); // create option element
  var text = document.createTextNode(firstDay.toLocaleDateString());
  opt.appendChild(text);
  document.getElementById("check-in").appendChild(opt);
  firstDay.setDate(firstDay.getDate() + 1); //change the date in the firstDay obj to the next day
}
var selectedDates = new Array();

function displayDate() {
  var selectedDate = document.getElementById("check-in").value;
  selectedDates.push(new DatePrice(selectedDate));
  // calculate total price
  var total = 0;

  for (var i = 0; i < selectedDates.length; i++) {
    total += selectedDates[i].p;
  }
  
  document.getElementById("price").innerHTML = total;
  document.getElementById("title").innerHTML = "The Total Price is: ";
  document.getElementById("SelectedDates").innerHTML = "";
  // Add selected date into second dropdown
  for (var i = 0; i < selectedDates.length; i++) {
    var opt = document.createElement("option"); // create option element
    var text = document.createTextNode(selectedDates[i].d.toLocaleDateString());
    opt.appendChild(text);
    document.getElementById("SelectedDates").appendChild(opt);
  }
}

function removeFromArray() {
  // get selected date from dropdown 2
  var selectedDate = document.getElementById("SelectedDates").value;
  var selectedIndex = document.getElementById("SelectedDates").selectedIndex;

  // get current total from demo paragraph

  var total = document.getElementById("price").innerHTML;
  // remove date from array & remove from second drop down
  // update total price
  for (var i = 0; i < selectedDates.length; i++) {
    if (selectedDate == selectedDates[i].d.toLocaleDateString()) {
      total -= selectedDates[i].p; //update total
      selectedDates.splice(i, 1); // remove from array
      document.getElementById("SelectedDates").remove(selectedIndex);
    }
  }
  document.getElementById("price").innerHTML = total;
}

class DatePrice {
  constructor(d) {
    this.d = new Date(d); //store as date obj
    this.p = this.getPrice();
  }
  getPrice() {
    if (this.d.getMonth() > 4 && this.d.getMonth() < 11) {
      return 200;
    } else if (this.d.getMonth() >= 11 || this.d.getMonth() == 0) {
      return 250;
    } else if (this.d.getMonth() >= 1 || this.d.getMonth() <= 4) {
      return 220;
    } else {
      return 0;
    }
  }
}
