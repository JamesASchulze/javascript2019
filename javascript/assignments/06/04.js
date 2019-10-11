function checkLogin(e, num) {

   // Get element for mounting feedback.
   var elNameMsg = document.getElementById('nameFeedback');
   var elPassMsg = document.getElementById('passFeedback');

   var elName = '';
   var elPass = '';

   // elName = elUsername.value;
   // elPass = elPassword.value;

   // Did we get the element?
   console.log(elNameMsg);
   console.log(e.textLength);

   // Check the num length and respond if accordingly.
   if (e.textLength < num) {
      elNameMsg.textContent = 'The ' + type + ' needs to be ' + num + ' characters or longer.';
   } else {
      elNameMsg.textContent = '';
   }

}

// Get username element then call the check login function for basic validation.
var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkLogin(elUsername, 5), false);

// Get password element then call the check login function for basic validation.
var elPassword = document.getElementById('password');
elPassword.addEventListener('blur', checkLogin(elPassword, 10), false);
