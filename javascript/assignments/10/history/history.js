$(function() {

  // Remove old then add the new content
  function updateContent(url){
    $('#container').remove();
    $('#content').load(url + ' #container').hide().fadeIn('500');
  }

  // User clicks nav link
  $('nav a').on('click', function(e) {

    // Prevent default of loading new link
    e.preventDefault();

    // Get the href
    var href = this.href;

    // Get the link as $ object
    var $this = $(this);

    // Remove and add current page indicator
    $('a').removeClass('current');
    $this.addClass('current');
    updateContent(href);

    history.pushState('', $this.text, href);

    // Override the backward and forward buttons
    window.onpopstate = function() {

      // Save the pathname in a variable and update the content
      var path = location.pathname;
      updateContent(path);

      // Save the everything after the last "/" as a page, in the page variable
      var page = path.substring(location.pathname.lastIndexOf('/')+1);

      // Remove and add current page indicator
      $('a').removeClass('current');
      $('[href="' + page + '"]').addClass('current');

    }


  });

});
