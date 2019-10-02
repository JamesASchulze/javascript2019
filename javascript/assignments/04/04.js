// Here is the IIFE Function
(function() {

   // Set up the variables
   var msg;
   var one = "One";

   // Select the case that matches the variable "one".
   switch(one) {
      case 1:
         msg = 1 + "is an integer."
         break;

      case "One":
         msg = "'One', is what is in the variable."
         break;

      case 2:
         msg = "2 is not saved in the variable."
         break;

      default:
         msg = "This is the default message."
         break;
   }

   var elWhatsInVarOne = document.getElementById("whatsInIt");
   elWhatsInVarOne.textContent = msg;

} ());