window.onload = function() {

   // Get the element with the a tag.
   var link = document.getElementById('pupImage');

   // Did I get the element?
   console.log(link);

   // Add the event listener and call the pupIn function and stop it from doing what it would normally do..
   link.addEventListener('click', pupIn, false);

}

function pupIn(e) {

   // log the event
   console.log(e);

   // Get the href and the title of the calling element to use as the 'src' and 'alt' attributes.
   var imageLink = e.target.getAttribute("href");
   var imageAlt = e.target.getAttribute('title');

   // log the link and alt caption.
   console.log(imageLink);
   console.log(imageAlt);

   // Create and fill a new img element.
   var elImg = document.createElement('img');
   elImg.setAttribute('src', imageLink);
   elImg.setAttribute('alt', imageAlt);

   // Element to insert image into.
   var elPosition = document.getElementById('dogPhoto');

   // Log elPosition.
   console.log(elPosition);

   // Add the img element to the DOM.
   elPosition.appendChild(elImg);

   // Prevent the default action.
   e.preventDefault();

}
