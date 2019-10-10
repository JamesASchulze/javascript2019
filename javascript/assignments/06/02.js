window.onload = function() {

   // Get the element with the a tag.
   var link = document.getElementById('pupImage');

   // Did I get the element?
   console.log(link);

   // Get the href and the title of the calling element to use as the 'src' and 'alt' attributes.
   var imageLink = link.getAttribute("href");
   var imageAlt = link.getAttribute('title');

   // log the link and alt caption.
   console.log(imageLink);
   console.log(imageAlt);

   // Click event that adds a photo of a puppy to the DOM.
   link.onclick = function() {

      // Create and fill a new img element.
      var elImg = document.createElement('img');
      elImg.setAttribute('src', imageLink);
      elImg.setAttribute('alt', imageAlt);

      pupIn(elImg);
      return false;

   }
}

function pupIn(elImg) {



   // Element to insert image into.
   var elPosition = document.getElementById('dogPhoto');

   // Log elPosition.
   console.log(elPosition);

   // Add the img element to the DOM.
   elPosition.appendChild(elImg);

}
