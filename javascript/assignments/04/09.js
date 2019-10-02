// Here is the IIFE Function
(function() {

   // Set variables.
   var num1 = 1;
   var num2 = 2; // It's not truthy because there are quotes characters.
   var msg = '';

   // Check the variables to see if they are truthy.
   if ( num1 * num2 < 5 && num1 + num2 < 5) {
      msg = 'You are seeing this because num1 (' + num1 + ') and num2 (' + num2 + ') are less than 5 when added together or multiplied by each other.';
   } else {
      msg = 'You are seeing this because num1 (' + num1 + ') and num2 (' + num2 + ') are equal to or more than 5 when added together or multiplied by each other.';
   }

   // Update the HTML
   el = document.getElementById("sclo");
   el.textContent = msg;

} ());