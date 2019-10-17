$(function() {

   // Select the H2 tag.
   var $h2 = $('h2');

   // Add the on click function to the H2 element.
   $h2.on('click', function(e) {

      // Select the element to toggle.
      var $toggle = $('#showHide');

      // Toggle display and hide on the ul element.
      $toggle.toggle("slow");

      // Toggle the text of the H2 tag.
      if ($h2.text() == "Hide") {
         $h2.text('Show');
      } else {
         $h2.text('Hide');
      }

   });

});