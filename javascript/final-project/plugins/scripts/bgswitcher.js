$(function() {

   $(".box").bgswitcher({
      images: ["../images/pup1.jpg", "../images/pup2.jpg", "../images/pup3.jpg"],
      interval: 4000,
      effect: "blind",
      repeat: "none",
    });

   // Console group name and jQuery version.
   console.group();

      // console log name
      console.log("James A. Schulze");

      // console log jQuery version #
      console.log("This page is using jQuery version: " + $().jquery);

   console.groupEnd();

});