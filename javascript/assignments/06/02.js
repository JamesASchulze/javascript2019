window.onload = function() {
   
   // Get the element with the a tag.
   var links = document.getElementsByTagName('a');
   
   // Did I get the element?
   console.log(links);
   
   // This page only has one 'a' tag but it is in a list. 
   for (var i=0; i<links.length; i++) {      
      // Get data about the image.
      if (links[i].getAttribute("class") == "pupImage");
      var imageLink = links[i].getAttribute("href");
      var imageAlt = links[i].getAttribute('title');
   }

   // Element to insert image into.
   var elPosition = document.getElementById('dogPhoto');
   console.log(elPosition);

   // Create and fill a new img element.
   var elImg = document.createElement('img');
   elImg.setAttribute('src', imageLink);
   elImg.setAttribute('alt', imageAlt);
   
   // Add the img element to the DOM.
   elPosition.appendChild(elImg);
   return false;

}

// onclick="showDogPhoto(this); return false;" 

// <script>
// window.onload = function() {


// var links = document.getElementsByTagName("a");
// console.log(links);
// for (var i=0; i<links.length; i++) {
// 	console.log(i);
// 	console.log(links[i]);
// 	console.log(links[i].getAttribute("class"));
// 	console.log(links[i].getAttribute("class") == "popup");
// 	if (links[i].getAttribute("class") == "popup") {
// 		links[i].onclick = function() {
// 			console.log(this.getAttribute("href"));
// 			popUp(this.getAttribute("href"));
// 			return false
// 		}
// 	}