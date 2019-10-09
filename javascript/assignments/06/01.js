function showDogPhoto(el) {
   // Did I get the element?
   console.log(el);

   // Get data about the image.
   var imageLink = el.getAttribute("href");
   var imageAlt = el.getAttribute('title');

   // Element to insert image into.
   var elPosition = document.getElementById('dogPhoto');

   // Create and fill a new img element.
   var elImg = document.createElement('img');
   elImg.setAttribute('src', imageLink);
   elImg.setAttribute('alt', imageAlt);

   // Add the img element to the DOM.
   elPosition.appendChild(elImg);
}