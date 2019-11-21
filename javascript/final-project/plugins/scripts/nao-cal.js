$(function() {

   // insert the date picked..
   $('.calendar-1').calendar({
      date: new Date(),
      autoSelect: true,
      select: function(date) {
         // Insert the date picked into the console.
         console.log('SELECT', date)

         // Insert the date picked into the DOM.
         $('#date-display').text(date);

      },
      toggle: function(y, m) {
         // Insert the current month (being viewed) into the console.
         console.log('TOGGLE', y, m)
      },
   });


});