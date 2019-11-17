var skywalkerMap;
function init() {

	// Location where the pin is set.
	var pinLoc = new google.maps.LatLng(38.063549,-122.648857);

	// Map options
	var mapOptions = {
		zoom: 15,
		center: pinLoc,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		panControl: false,
		zoomControl: true,
		zoomControlOptions: {
		  style: google.maps.ZoomControlStyle.SMALL,
		  position: google.maps.ControlPosition.TOP_RIGHT
		},

		styles: [
			{
			  "elementType": "labels",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "administrative",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "administrative",
			  "elementType": "labels",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "administrative.country",
			  "stylers": [
				 {
					"visibility": "on"
				 }
			  ]
			},
			{
			  "featureType": "administrative.province",
			  "elementType": "labels.text",
			  "stylers": [
				 {
					"visibility": "on"
				 }
			  ]
			},
			{
			  "featureType": "landscape",
			  "stylers": [
				 {
					"color": "#585858"
				 },
				 {
					"visibility": "on"
				 }
			  ]
			},
			{
			  "featureType": "landscape",
			  "elementType": "labels",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "poi.attraction",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#ffffff"
				 },
				 {
					"visibility": "on"
				 }
			  ]
			},
			{
			  "featureType": "poi.business",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "poi.government",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "poi.medical",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#ffffff"
				 },
				 {
					"visibility": "on"
				 }
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "geometry.stroke",
			  "stylers": [
				 {
					"weight": "1.76"
				 }
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "labels",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "poi.place_of_worship",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "poi.school",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "poi.sports_complex",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "road",
			  "stylers": [
				 {
					"visibility": "on"
				 }
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#ffffff"
				 },
				 {
					"weight": "1.46"
				 }
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "labels",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "road.arterial",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"weight": "0.61"
				 }
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "geometry.stroke",
			  "stylers": [
				 {
					"weight": "1.12"
				 }
			  ]
			},
			{
			  "featureType": "road.highway.controlled_access",
			  "elementType": "geometry.fill",
			  "stylers": [
				 {
					"visibility": "on"
				 },
				 {
					"weight": 3
				 }
			  ]
			},
			{
			  "featureType": "transit",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#00a8b3"
				 },
				 {
					"visibility": "simplified"
				 }
			  ]
			}
		]
	}

	// Prepare to mount the map to the DOM.
	var skywalkerMap = new google.maps.Map(document.getElementById('map'), mapOptions);

	// Prepare the marker.
	var startPos = new google.maps.Marker({
		position: pinLoc,
		map: skywalkerMap,
		icon: "images/rebel.png"
	});

}

// Mount the script to the DOM.
function loadScript() {
	var script = document.createElement('script');
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDrq6itjJPber61m46hdD6xu_fwZ5zvnrQ&callback=init';
	document.body.appendChild(script);
}

window.onload = loadScript;