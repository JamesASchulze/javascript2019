// Here is the IIFE Function
(function() {

   // Days of the week.
   var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   // Months of the year.
   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

   // Get a new instance of the Date.
   var date = new Date();
   var weekday = date.getDay();
   var month = date.getMonth();
   var day = date.getDate();
   var year = date.getFullYear();

   // Update the HTML
   elDate = document.getElementById("date");
   elDate.textContent = weekdays[weekday] + ", " + months[month] + " " + day + ", " + year;

   } ());