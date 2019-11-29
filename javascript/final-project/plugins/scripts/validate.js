$(function() {

   $("#form").validate({
      errorPlacement: function(error, element) {
         error.appendTo(element.parent());
      },
      success: function(label) {
          label.parent().removeClass("error-parent");
      },
      highlight: function(element, errorClass) {
          $(element).parent().addClass("error-parent");
          $(element).fadeOut(function() {
              $(element).fadeIn('slow');
          });
      },
      rules: {
         userEmail: {
            required: true,
            email: true,
         },
         password: {
            required: true,
            minlength: 6,
         },
         dinosaur: {
            required: true,
            minlength: 4,
         },
         cPassword: {
            required: true,
            equalTo: "#password",
         },
         choice: {
            required: true,
         },
         codeLang: {
            required: true,
         },
         'sw[]': {
            required: true,
            minlength: 2,
         },
         why: {
            required: true,
         }
      },
      messages: {
         username: {
            required: "Please enter a valid email",
            email: "Please enter a valid email"
         },
         password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 6 characters long"
         },
         dinosaur: {
            required: "Please tell us what your favorite dinosaur is",
            minlength: "No dinosaur has a name shorter than 4 letters... I just made that up, but it's my rule!"
         },
         cPassword: {
            required: "Please confirm your password",
            equalTo: "This didn't match, please confirm your password"
         },
         choice: {
            required: "Please select which one you would rather have.",
         },
         codeLang: {
            required: "Please select a language",
         },
         'sw[]': {
            required: "Please choose at least 2 of the movies",
            minlength: "Please choose at least 2 of the movies",
         },
         why: {
            required: "Please write a short essay on \"Why\" for us",
         }
      },

   });

   // Console group name and jQuery version.
   console.group();

      // console log name
      console.log("James A. Schulze");

      // console log jQuery version #
      console.log("This page is using jQuery version: " + $().jquery);

   console.groupEnd();

});