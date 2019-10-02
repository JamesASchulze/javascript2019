// Here is the IIFE Function
(function() {

   // Array of 10 things.
   var things = ["Thing-1", "Thing-2", "Thing-3", "Thing-4", "Thing-5", "Thing-6", "Thing-7", "Thing-8", "Thing-9", "Thing-10"];

   // Set the variable to empty.
   var allTheThings = "";

   // Loop through the array.
   for(i = 0; i < 10; i++) {
      allTheThings = allTheThings + "<li>" + things[i] + "</li>";
   }

   // Update the HTML
   elThings = document.getElementById("things");
   elThings.innerHTML = allTheThings;

   } ());