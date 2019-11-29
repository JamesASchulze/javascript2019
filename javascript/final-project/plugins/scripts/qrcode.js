$(function() {

   // This plugin is really cool!
   $('#qrcode').qrcode("This plugin is great");

   // My own website that I have not done hardly anything with. Any ideas?
   $('#js-qrcode').qrcode("jamesschulze.com");

   // Link to The Atheist Delusion movie.
   https://www.youtube.com/watch?v=ChWiZ3iXWwM
   $('#delusion').qrcode("www.youtube.com/watch?v=ChWiZ3iXWwM");

   // Link to my NWTC web dev projects jschulze.bitweb1.nwtc.edu/
   $('#nwtc').qrcode("jschulze.bitweb1.nwtc.edu");

   // Console group name and jQuery version.
   console.group();

      // console log name
      console.log("James A. Schulze");

      // console log jQuery version #
      console.log("This page is using jQuery version: " + $().jquery);

   console.groupEnd();

});