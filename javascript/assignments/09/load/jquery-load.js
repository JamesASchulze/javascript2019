// User clicks nav link
$('nav a').on('click', function(e) {

   // Prevent default of loading new link
   e.preventDefault();

   // Get the href
   var url = this.href;

   // Remove and add current page indicator
   $('nav a.current').removeClass('current');
   $(this).addClass('current');

   // Remove old then add the new content
   $('#container').remove();
   $('#content').load(url + ' #container').hide().fadeIn('500');
 });