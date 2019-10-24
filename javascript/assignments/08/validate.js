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
         username: {
            required: true,
            minlength: 5,
            maxlength: 20,
         },
         password: {
            required: true,
            minlength: 6,
         },
         trilogy: {
            required: true,
         },
         color: {
            required: true,
         },
         'spam[]': {
            required: true,
            minlength: 4,
         },
         feedback: {
            required: true,
         }
      },
      messages: {
         username: {
            required: "Please enter a username",
            minlength: "Your username must consist of at least 5 characters",
            maxlength: "Your username must consist of less than 20 characters"
         },
         password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 6 characters long"
         },
         trilogy: {
            required: "Please select your favorite movie trilogy.",
         },
         color: {
            required: "Please pick a color",
         },
         'spam[]': {
            required: "Please choose at least 4 options for us to spam you.",
            minlength: "If you want to finish this form and get what we got, you must choose at least 4 ways for us to spam you.",
         },
         feedback: {
            required: "You must tell us what you like about this form.",
         }
      },

   });

});