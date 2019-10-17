$(function() {

   var $h2 = $('h2');
   $h2.on('click', function(e) {

      var $toggle = $('#showHide');

      $toggle.toggle("slow");

      if ($h2.text() == "Hide") {
         $h2.text('Show');
      } else {
         $h2.text('Hide');
      }

   });

});