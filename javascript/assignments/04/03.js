// Here is the IIFE Function
(function() {

   // Set up the object.
   var Donut = new Object();

   var Donut = {
      kids : 4, // The 5th kid couldn't eat a donut, because he is only 7 months old.
      glutenFreeDonuts : 9,
      howManyAreDads: 5,
      donutsPerKid : function() {

         // Donuts after the "dad tax" is applied.
         var afterDadTax = this.glutenFreeDonuts - this.howManyAreDads;

         // Dads donuts after trying a gluten free donut.
         var afterOneGFDonut = this.howManyAreDads - 1

         // Number of donuts returned after trying a gluten free donut.
         var donutsReturned = afterDadTax + afterOneGFDonut

         // Remaining donuts dispersed to the children. What a nice dad!
         return donutsReturned / this.kids;
      }
   }

   // Multiply the donuts divided amongst the kids by the amount of kids.
   var kidsDonuts = Donut.donutsPerKid() * Donut.kids;

   // Alert a cheer for dad if he gave most of his donuts back to the kids.
   if ( kidsDonuts  >= Donut.howManyAreDads ) {
      (function() {
         alert("Hip, hip, hurray!");
      } ())
      msg = "Dad gave us his donuts!";
   }

   // Update the HTML
   var elKids = document.getElementById("kids");
   elKids.textContent = Donut.kids;

   var elDonuts = document.getElementById("donuts");
   elDonuts.textContent = Donut.glutenFreeDonuts;

   var elDad = document.getElementById("dadCard");
   elDad.textContent = Donut.howManyAreDads;

   var elDonutsForKids = document.getElementById("donutsForKids");
   elDonutsForKids.textContent = Donut.donutsPerKid();

   var elYay4Dad = document.getElementById("yay4Dad");
   elYay4Dad.textContent = msg;

   } ());