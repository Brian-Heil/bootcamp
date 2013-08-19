/*
	# Exercise 1 #
	Goal: Get JSON data from "API"
		http://bootcamp-rocketu.rhcloud.com/exercises/ajax/data/movies-box-office.json
	Logic:
		1. Retrieve JSON object from target URL
		2. Console.log
		* Make sure document is ready!!!
*/

$(document).ready(function() {
	$.ajax({
		// REQUEST
		type: 'get',
		url: 'http://bootcamp-rocketu.rhcloud.com/exercises/ajax/data/movies-box-office.json',
		data: {},
		// RESPONSE
		dataType: 'json',
		success: function(json) {
			console.log(json);
			/* 
				# Exercise 2 #
				Goal: Display movie titles in a list in the HTML
				Logic:
					1. Identify the list of movies
					2. Loop through the list of movies
					3. Find the movie title and add it to a list in HTML
			*/

			// OPTION 1 -- LOOPING THROUGH EACH MOVIE AND APPENDING OUTPUT USING "TEMPLATE"
			for(var i in json.movies) {
				// BRUTE FORCE
				var movieItem = '<li>';
					movieItem += json.movies[i].title;
					movieItem += '<img src="' + json.movies[i].posters.thumbnail + '"/>';
					movieItem += '</li>';
					
				// USING INLINE MUSTACHE TEMPLATE
				var movieInlineTemplate = '<li>{{title}}<img src="{{posters.thumbnail}}"/>{{ratings.critics_rating}}</li>';
				
				// USING HTML MUSTACHE TEMPLATE (PREFERRED)
				var movieTemplate = $('#movie-template').html();
				
				// RENDERING THE OUTPUT USING MUSTACHE
				var output = Mustache.render(movieTemplate, json.movies[i]);
				
				//$('#movies').append( movieItem );
				$('#movies').append( output );
			}
			
			// OPTION 2 - REPLACING CONTENT WITH FULL TEMPLATE
			$('ul#movies').html( Mustache.render( $('#all-movies-template').html(), json ));
		},
		error: function(err) {
			console.log(err);
		}
	});
});