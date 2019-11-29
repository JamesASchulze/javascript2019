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

         // Loop through the json and build the new content
         for (var i = 0; i < responseObject.puppies.length; i++) {
            newContent += '<div class="inlineImages">';
            newContent += '<img src="' + responseObject.puppies[i].img + '" ';
            newContent += 'alt="Puppy' + responseObject.puppies[i].name + '" />';
            newContent += '<p><b>Name:' + responseObject.puppies[i].name + '</b><br>';
            newContent += '<p><b>Age:' + responseObject.puppies[i].age + '</b></p>';
            newContent += '</div>';
         }

         // Update the page with the new content
         document.getElementById('content').innerHTML = newContent;

      }
   };

   // Prepare and send the request.
   xhr.open('GET', 'json-data.json', true);
   xhr.send(null);
});