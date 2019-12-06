function checkLogin(e, num) {

   // Get element for mounting feedback.
   var elNameMsg = document.getElementById('nameFeedback');
   var elPassMsg = document.getElementById('passFeedback');

   // Get the value and length of the text in the input.
   console.log(e.target.value);
   var valLength = e.target.value.length;

   // Check the num length of the username and respond if accordingly.
   if (valLength < num) {
      elNameMsg.textContent = 'The username needs to be ' + num + ' characters or longer.';
   } else {
      elNameMsg.textContent = '';
   }

   // Check the num length of the password and respond if accordingly.
   if (valLength < num) {
      elPassMsg.textContent = 'The password needs to be ' + num + ' characters or longer.';
   } else {
      elPassMsg.textContent = '';
   }

}

// Get username element then call the check login function for basic validation.
var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', function(e) {
   checkLogin(e, 5)
}, false);

// Get password element then call the check login function for basic validation.
var elPassword = document.getElementById('password');
elPassword.addEventListener('blur', function(e){
   checkLogin(e, 10)
}, false);
