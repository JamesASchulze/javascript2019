// Here is the IIFE Function
(function() {
   // Set up the object.
   var Trouble = {
      kids : 5,
      oreos : 10,
      howManyAreDads : 5,
      oreosPerKid : function() {
         var afterDadTax = this.oreos - this.howManyAreDads;
         return afterDadTax / this.kids;
      }
   }

   // Update the HTML
   var elKids = document.getElementById("kids");
   elKids.textContent = Trouble.kids;

   var elOreos = document.getElementById("oreos");
   elOreos.textContent = Trouble.oreos;

   var elDad = document.getElementById("dadCard");
   elDad.textContent = Trouble.howManyAreDads;

   var elOreosForKids = document.getElementById("oreosForKids");
   elOreosForKids.textContent = Trouble.oreosPerKid();

   } ());