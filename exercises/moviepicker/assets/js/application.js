$(document).ready(function() {
	
	// hide ul.picklist
	$('#picklist ul.picklist').hide();
	
	// force all checkboxes to be checked by default
	$('input[type=checkbox]').attr('checked','checked');
	
	// add 'change' event listener to all checkboxes
	$('input[type=checkbox]').on('change',function() {
		console.log( $(this).attr('name') );
		// DO SOMETHING
	});
	
	// add 'click' event listener to button#btn-newmovies
	$('button#btn-newmovies').on('click',function() {
		// DO OTHER THINGS
	});
	
});