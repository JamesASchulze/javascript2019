$(document).ready(function(){

	// Create XMLHttpRequest object
	var xhr = new XMLHttpRequest();

	// When response has loaded
	xhr.onload = function() {
		// If server status was ok
		if(xhr.status === 200) {
			document.getElementById('content').innerHTML = xhr.responseText; // Update
		}
	};

	// Prepare the request
	xhr.open('GET', 'ajax-data.html', true);
	xhr.send();

});