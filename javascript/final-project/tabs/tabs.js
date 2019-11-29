$(function() {

   // Use the new plugin!
   $('.tab-list').tabs();

   // Console group name and jQuery version.
   console.group();

      // console log name
      console.log("James A. Schulze");

      // console log jQuery version #
      console.log("This page is using jQuery version: " + $().jquery);

   console.groupEnd();

});