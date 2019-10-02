// Here is the IIFE Function
(function() {

   function toMeters(value) {
      return value / 1.0936;
   }

   // Get the number of yards.
   var elNumber = document.getElementById("yards");
   var elNumberValue = elNumber.textContent;

   var toMetersResult = toMeters(elNumberValue).toFixed(2);

   var elMeters = document.getElementById("meters");

   elMeters.textContent = toMetersResult;

   } ());