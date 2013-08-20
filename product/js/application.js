$(document).ready(function() {
	$('#content').append( Mustache.render( $('#users-template').html(), users) );
	$('#content').append( Mustache.render( $('#places-template').html(), places) );
});