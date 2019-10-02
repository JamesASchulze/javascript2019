// Here is the IIFE Function
(function() {

   // Set up the object.
   function Candy(kids, candyBars, howManyAreDads) {
      this.kids = kids; // Like the last page, the 5th kid is a baby. No candy for him!
      this.candyBars = candyBars;
      this.howManyAreDads = howManyAreDads;
      this.candyBarsPerKid = function() {

         // Because dad loves his kids...
         var sharingDad = this.howManyAreDads - 1;

         // Disperse the candy to the children. What a nice dad!
         return sharingDad / this.kids;
      };
   }

   var candyBarTime = new Candy(4, 5, 5);

   // Update the HTML
   var elKids = document.getElementById("kids");
   elKids.textContent = candyBarTime.kids;

   var elCandyBars = document.getElementById("candyBars");
   elCandyBars.textContent = candyBarTime.candyBars;

   var elDad = document.getElementById("dadCard");
   elDad.textContent = candyBarTime.howManyAreDads;

   var elForKids = document.getElementById("candyBarsForKids");
   elForKids.textContent = candyBarTime.candyBarsPerKid();

} ());