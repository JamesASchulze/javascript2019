function checkLogin(e, num) {
// function checkLogin() {

   // Get element for mounting feedback.
   var elNameMsg = document.getElementById('nameFeedback');
   var elPassMsg = document.getElementById('passFeedback');

   // Did we get the element?
   console.log(e);
   console.log(e.textLength);

   // Check the num length and respond if accordingly.
   // if (e.textLength < num) {
   if (e.textLength < num) {
      elNameMsg.textContent = 'The ' + e.id + ' needs to be ' + num + ' characters or longer.';
   } else {
      elNameMsg.textContent = '';
   }

}

// Get username element then call the check login function for basic validation.
var elUsername = document.getElementById('username');
console.log(elUsername);
elUsername.addEventListener("blur", checkLogin(elUsername, 5));


// Get password element then call the check login function for basic validation.
var elPassword = document.getElementById('password');
elPassword.addEventListener('blur', checkLogin(elPassword, 10), false);
