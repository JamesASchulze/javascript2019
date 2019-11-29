$(function() {

   // insert the date picked..
   $('.calendar-1').calendar({

      date: new Date(),
      autoSelect: true,
      select: function(date) {

         // Insert the date picked into the DOM.
         $('#date-display').text(date);

      }
   });

   // Console group name and jQuery version.
   console.group();

      // console log name
      console.log("James A. Schulze");

      // console log jQuery version #
      console.log("This page is using jQuery version: " + $().jquery);

   console.groupEnd();

});