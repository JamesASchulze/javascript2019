// Here is the IIFE Function
(function() {

   // Set variables.
   var num1 = 1;
   var num2 = 2; // It's not truthy because there are quotes characters.
   var msg = '';

   // Manipulate the data.
   num2 -= 1;

   // Check the variables to see if they are truthy.
   if ( num1 * num2 < 5 && num1 + num2 < 5) {
      msg = 'num1 (' + num1 + ') and num2 (' + num2 + ') are strictly equal.';
   } else {
      msg = 'num1 (' + num1 + ') and num2 (' + num2 + ') are not strictly equal.';
   }

   // Update the HTML
   el = document.getElementById("tOrF");
   el.textContent = msg;

} ());