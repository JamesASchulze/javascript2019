// Here is the IIFE Function
(function() {

   // Number variables.
   var num1 = 5;
   var num2 = 6;
   var num3 = 0;

   // If statement to check evaluate num1 and num2
   if ( num1 > num2 ) {
      // while loop if true.
      while (num1 < 10) {
         num3 = num1 * num3;
         num1 += 1;
      }
   } else {
      // while loop if false.
      while (num3 < 10) {
         num3 = num1 + num2 + num3;
         num3 += 2;
      }
   }


   // Update the HTML
   el = document.getElementById("num");
   el.textContent = num3;

   } ());