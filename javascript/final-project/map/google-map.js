$(function() {

	// function mapInit() {

		// Get the map element to attach the map to
		var $elMap = $('#map');

		// Location unavailable message.
		var msg = 'Unfortunately, we were not able to get your location.';


		// If don't got the location.
		function fail(msg) {

			// Deliver the "location is unavailable" message.
			$elMap.textContent = msg;

			// Console log the error.
			console.log(msg.code);
		}


		// If got the location build a success message with the coords and also the google map.
		function success(position) {

			// Success message
			msg = '<h3>Longitude:<br>';
			msg += position.coords.longitude + '</h3>';
			msg += '<h3>Latitude:<br>';
			msg += position.coords.latitude + '</h3>';

			// Deliver the success message
			$elMap.innerHTML = msg;

			// Function to build the map.
			function buildMap(latitude, longitude, mountingElemnt) {

				// Build the map
				var map = new google.maps.Map(mountingElemnt, {
					center: {
						lat: latitude,
						lng: longitude,
					},
					mapTypeId: google.maps.MapTypeId.SATELLITE,
					zoom: 20,
				});

				// Build the marker
				var marker = new google.maps.Marker({
					position: {
						lat: latitude,
						lng: longitude,
					},
					map: map,
					animation: google.maps.Animation.BOUNCE,
					icon: "stormtrooper.png",
				});

				// Build the info window
				var infowindow = new google.maps.InfoWindow({
					content: "You around here..."
				});

				// Open the map.
				infowindow.open(map, marker);
			}

			// Build the google map
			buildMap(position.coords.latitude, position.coords.longitude, $elMap);
		}


		// Check to see if geolocation is supported
		if (Modernizr.geolocation) {

			// Ask for users location
			navigator.geolocation.getCurrentPosition(success, fail);

			// Tell the user the location is being verified.
			$elMap.innerHTML = '<h2>Verifying location</h2>';
		} else {

			// If geolocation is not supported, deliver the location is unavailable message.
			$elMap.textContent = msg;
		}

		// }




	// Mount the script to the DOM.
	function loadScript() {
		var script = document.createElement('script');
		// script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDrq6itjJPber61m46hdD6xu_fwZ5zvnrQ&callback=mapInit';
		script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDrq6itjJPber61m46hdD6xu_fwZ5zvnrQ';
		document.body.appendChild(script);
	}

	// Mount the script tag to the dom when the window is loading.
	window.onload = loadScript();
});