$(document).ready(function() {

	$('form').on('submit',function() {
		var firstname = $(this).find('input#firstname').val();
		var lastname = $(this).find('input#lastname').val();
		console.log(firstname + ' ' + lastname);
		
		$.ajax(
			{
				url: 'http://bootcamp-rocketu.rhcloud.com/api',
				type: 'POST',
				dataType: 'json',
				data: {
					fname: firstname,
					lname: lastname,
					date: (new Date())
				},
				success: function(json) {
					console.log(json);
					// DO SOMETHING HERE
	
				}
			}
		);
		
		return false;
	});

	$('#getjson').on('click',function() {
		var me = {
			firstname: 'Joe',
			lastname: 'Davis',
			age: 89,
			email: 'joe.davis@rocket-space.com',
			cell: '800-123-4567',
			bands: ['Beatles','Train','One Direction']
		};
		
		console.log('Hi, I\'m ' + me.firstname + '.  I\'m ' + me.age + ' years old and I like listening to ' + me.bands[0] + '.'); 
	});
	
	$('#getxml').on('click',function() {
		var personxml = "<?xml version='1.0'?>";
			personxml += "<person>";
			personxml += "  <firstname>Mike</firstname>";
			personxml += "  <lastname>Jones</lastname>";
			personxml += "  <age>25</age>";
			personxml += "  <cell>(800) 123-4567</cell>";
			personxml += "  <bands><band>Beatles</band><band>Train</band><band>One Direction</band></bands>";
			personxml += "</person>";
			
		var xmldoc = $.parseXML(personxml);
		var xml = $(xmldoc);
		
		var firstname = xml.find('firstname').text(),
			age = xml.find('age').text(),
			band = xml.find('bands band').first().text();
		
		console.log('Hi, I\'m ' + firstname + '.  I\'m ' + age + ' years old and I like listening to ' + band + '.'); 
	});
	
	$('#getjsonajax').on('click',function() {
		$.ajax({
			url: 'data/me.json',
			dataType: 'json',
			success: function(data) {
				console.log(data);

				var msg = 'Hi, I\'m ' + data.firstname + '. ';
				msg += 'I\'m ' + data.age + ' years old and ';
				msg += 'my cell number is ' + data.cell + '. ';
				msg += 'Here\'s a list of bands that I like:';
				
				$('body').append( $('<p/>').html(msg) );
				
				list = $('<ul/>');
				for(var i=0; i<data.bands.length; i++) {
					list.append( $('<li/>').html(data.bands[i]) );	
				}
				$('body').append(list);
			}
		});
	});
	
	$('#getmovie').on('click',function() {
		console.log('Getting movie');
		$.ajax({
			url: 'data/movie.json',
			dataType: 'json',
			success: function(data) {
				console.log(data);
				// Option 1
				for(var i=0; i<data.length; i++) {
					$('body').append( $('<p/>').html(data[i].title) );
				}
				// Option 2
				for(var k in data) {
					$('body').append( $('<p/>').html(data[k].title) );
				}
			}
		});
	});
	
	$('#testGet').on('click',function() {
		$.ajax({
			url: 'http://bootcamp-rocketu.rhcloud.com/api?submit=Submit&firstname=Kevin&lastname=Lee',
			type: 'GET',
			dataType: 'json',
			success: function(json) {
				// MOST IMPORTANT LINE if you are uncertain about what's coming back from the API
				console.log(json); 
				
				// DISPLAY THE DATA in the browser
				for(var k in json.data) {
					// OPTION 1
					$('body').append('<p>' + k + '=' + json.data[k] + '</p>');
					// OPTION 2
					$('body').append($('<li/>').html(k + '=' + json.data[k]));
				}
			},
			complete: function(jqXHR,statusCode) {
				console.log(statusCode);
			}
		});
	});
	
	$('#testPost').on('click',function() {
		
	});
});