$(function() {

   // Create XMLHttpRequest object
   var xhr = new XMLHttpRequest();

   // When ready state changes
   xhr.onload = function() {

      // If server status was ok
      if(xhr.status === 200) {
         responseObject = JSON.parse(xhr.responseText);

         // Create and build a string to hold the new content.
         var newContent = '';
         for (var i = 0; i < responseObject.puppies.length; i++) { // Loop through object
            newContent += '<div class="inlineImages">';
            newContent += '<img src="' + responseObject.puppies[i].img + '" ';
            newContent += 'alt="Puppy' + responseObject.puppies[i].name + '" />';
            newContent += '<p><b>Name:' + responseObject.puppies[i].name + '</b><br>';
            newContent += '<p><b>Age:' + responseObject.puppies[i].age + '</b></p>';
            newContent += '</div>';
         }

         // Update the page content
         document.getElementById('content').innerHTML = newContent;

      }
   };

   // Prepare and send the request.
   xhr.open('GET', 'json-data.json', true);
   xhr.send(null);
});