(function($) {

   $.fn.tabs = function () {
      // Get "this"
      var $this = $(this);

      // The active list item
      var $tab = $this.find('li.active');

      // The active list item link
      var $link = $tab.find('a');

      // The active content
      var $content = $($link.attr('href'));

      // When the tab is clicked...
      $this.on('click', '.tab-header', function(e) {

         // Prevent default behavior
         e.preventDefault();

         // Scoped link of this.
         var $link = $(this)

         // Get the hash of the tab clicked
         var hash = this.hash;

         // If the tab is not currently active..
         if (hash && !$link.parent().is('.active')) {

            // Remove the active class
            $content.removeClass('active');
            $tab.removeClass('active');

            // Activ-ate!
            $content = $(hash).addClass('active');
            $tab = $link.parent().addClass('active');
         }
     });
     return this;
   };
// Pass in jQuery object
 }(jQuery));