// Get the elements.
var elForm = document.getElementById('signupForm');
var elPackage = document.getElementById('package');
var elPackHint = document.getElementById('packHint');
var elTerms = document.getElementById('terms');
var elTermHint = document.getElementById('termHint');

// Hint for the package selection.
function packHint() {
   var package = this.options[this.selectedIndex].value;

   console.log(package);

   if (package === 'annual') {
      elPackHint.innerHTML = 'Nice choice, this is the best bang for your buck! (International users, please google the meaning of this American term.)'
   } else if (package === 'semi-annual') {
      elPackHint.innerHTML = '';
   } else if (package === 'monthly') {
      elPackHint.innerHTML = 'Not into long-term commitments, huh? ...You would save more $$$ if you purchase the yearly subscription';
   } else if (package === 'weekly') {
      elPackHint.innerHTML = "You have commitment issues, don't you?";
   }
}

// Hint for the terms checkbox.
function checkTermsBox(event) {
   if (!elTerms.checked) {
      elTermHint = 'If you really want this, you have to agree to our terms.';
      event.preventDefault();
   } else {
      elTermHint = "Good, we're glad you see it our way.";
   }
}

// Add event listeners to DOM elements.
elForm.addEventListener('submit', checkTermsBox, false);
elForm.addEventListener('change', console.log(elTerms), false);
elPackage.addEventListener('change', packHint, false);