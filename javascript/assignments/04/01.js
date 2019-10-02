// Here is the IIFE Function
(function() {

   function coolKids() {
      var kids;
      kids = true;
      if (kids == true) {
         return true;
      } else {
         return false;
      }
   }

   // Answer the question with true or false.
   var elIfElse = document.getElementById("if/else");

   elIfElse.textContent = coolKids();

   } ());