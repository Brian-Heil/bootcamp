/*
	Goal: Display a map of your current location
	Logic:
		1. Get the current location
		2. "Construct" the map, getting the map url with parameters
		3. Display the map (drawing it out to the page)
		Optional, create custom getStaticMapUrl and drawMap functions
*/
var map;
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(
		function(position) {
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;
			/* OPTION 1 - EASIEST WAY - BRUTE FORCE 
			var url = 'http://maps.googleapis.com/maps/api/staticmap?';
				url += 'center=' + lat + ',' + lng + '&';
				url += 'zoom=13' + '&';
				url += 'sensor=false' + '&';
				url += 'size=600x300' + '&';
				url += 'key=AIzaSyAMtq1_NN7BgM5UYXT9AKgzUFyqjEmL8XU';
			console.log(url);
			var map = document.getElementById('map');
			map.innerHTML = '<img src="' + url + '"/>';		
			*/
			url = getStaticMapUrl(position.coords);
			console.log(url);
			drawStaticMap(url);
			if (map) {
				latlng = new google.maps.LatLng(lat,lng);
				map.setCenter(latlng);
				addDynamicMarker(latlng,'RocketU in with');
			}
		}, 
		errorHandler
	);
} else {
	// SORRY, Geolocation is not supported
}

/* DYNAMIC */

function getDynamicMap(position) {
	var mapOptions = {
	    center: new google.maps.LatLng(37.797677,-122.394339),
	    zoom: 13,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(
	    document.getElementById("dynamic-map"),
	    mapOptions
	);
}
google.maps.event.addDomListener(window, 'load', getDynamicMap); // $(window).on('load',getDynamicMap); 

function addDynamicMarker(latlng,content) {
	var infowindow = new google.maps.InfoWindow({
		content: content
	});

	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: content
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});	
}

/* STATIC */
function getStaticMapUrl(params) {
	var url = 'http://maps.googleapis.com/maps/api/staticmap?',
		options = {
			zoom: 13,
			sensor: false,
			size: '600x600',
			key: 'AIzaSyAMtq1_NN7BgM5UYXT9AKgzUFyqjEmL8XU',
			markers: []
		};
	if (params.latitude && params.longitude) {
		options.center = params.latitude + ',' + params.longitude;
		options.markers.push('color:blue|label:R|'+options.center);
	} else {
		options.center = 'San Francisco, CA';
	}
	options.markers.push('color:red|label:U|'+'Union Square, San Francisco, CA');
	options.markers.push('color:purple|label:C|'+'China Town, San Francisco, CA');
	
	for(var i in options) {
		if (typeof options[i] === 'object') {
			for (var j in options[i]) {
				url += i + '=' + encodeURI(options[i][j]) + '&';
			}
		} else {
			url += i + '=' + encodeURI(options[i]) + '&';
		}
	}
	return url;
}
function drawStaticMap(url) {
	var map = document.getElementById('static-map');
	map.innerHTML = '<img src="' + url + '"/>';
}
function errorHandler() {
	console.log('Error');
}