function sayHello() {
	window.alert(getGreeting() + ", World!");
}

function getGreeting() {
	return ((new Date()).getHours() < 12? 'Good morning':'Good afternoon');
}

function getUserName() {
	return window.prompt("Hi - what's your name?");
}

function sayPersonalHello() {
	var userName = getUserName();
	if (userName == "") {
		window.alert("Sorry, I don't talk to strangers...");
		return;	
	}
	var message = getGreeting() + ", " + userName + ", How are you?"
	if (confirm(message + "\nWould you like this greeting added to the page?")) {
		writeGreeting(message);
	}
}

function writeGreeting(greeting) {
	document.getElementById("greeting").textContent = greeting;
}

function doTimesTables() {
	
	/* Prompt the user for a number */
	var timesTable = window.prompt("Please enter a number from 1 to 10","5");
	
	/* Check that a number was entered */
	if (isNaN(timesTable)) {
		/* If not a number then return at this point */
		window.alert("Sorry, that doesn't look like a number, please try again");
		return;	
	}
	
	/* Check that number is in range */
	if (timesTable < 1 || timesTable > 10) {
		/* If not in range then return at this point */
		window.alert("Sorry, " + timesTable + " is outside the range 1-10, please try again");
		return;	
	}
	
	/* Start to build the text - initialise a variable with an empty string */
	var timesTableText = "";
	
	/* Use a for loop to append each line to the string */
	for (var i = 1; i <= timesTable; i++) {
		/* Include a <br> tag for the browser and a newline for source */
		timesTableText += i + " x " + timesTable + " = " + (i * timesTable) + "<br>\n";
	}
	
	/* Assign the string to the paragraph - need to use innerHTML or <br> tag is not rendered */
	document.getElementById("timestable").innerHTML = timesTableText;
}