window.onload = function() {

   // Variables
   var itemsRemain = 0;
   var elParagraphs = document.getElementsByTagName('p');
   var position = document.getElementById('page');
   var list = document.createElement('ul');

   // Add the ul to the DOM.
   position.appendChild(list);


   // For loop to add, fill and style the li's to the DOM.
   for (var i = 0; i < elParagraphs.length; i++) {
      var pContent = elParagraphs[i].textContent;
      var newElLi = document.createElement('li');
      newElLi.textContent = pContent;

      // Style the li's
      if ( i === 0 || i == elParagraphs.length - 1 ) {
         newElLi.className = 'complete';
      }
      else {
         newElLi.className = 'cool';
      }

      // Count the cool elements.
      if ( newElLi.className == 'cool'){
         itemsRemain += 1;
      }
      list.appendChild(newElLi);

   }

   // Remove the paragraph element.
   for (i = 0; i < elParagraphs.length;) {
      var removeParagraph = elParagraphs[i];
      position.removeChild(removeParagraph);
   }

   // Add the remaining to do list items to the h2 element.
   var heading = document.querySelector('h2');
   var headingText = heading.firstChild.nodeValue;
   var newHeading = headingText + '<span>' + itemsRemain + '</span>';
   heading.innerHTML = newHeading;

   // Add the remaining to do list items to the title element.
   var title = document.querySelector('title');
   var titleText = title.firstChild.nodeValue;
   var newTitle = itemsRemain + ' ' + titleText;
   title.innerText = newTitle;
}