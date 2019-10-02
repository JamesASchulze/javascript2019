// Here is the IIFE Function
(function() {

   // Set variables.
   var num = 0;
   var quot = '""'; // It's not truthy because there are quotes characters.
   var msg = '';

   // Check the variables to see if they are truthy.
   if ( num == quot ) {
      msg = num + ' and ' + quot + ' are truthy.';
   } else {
      msg = num + ' and ' + quot + ' are falsy.';
   }

   // Update the HTML
   el = document.getElementById("tOrF");
   el.textContent = msg;

} ());