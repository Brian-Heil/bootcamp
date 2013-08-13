function sayHello() {
	var greeting = getGreeting();
	window.alert(greeting + ", World!");
}

function getGreeting() {
	var today = new Date(),
		hour = today.getHours(),
		greeting;
	if(hour < 12) {
		greeting = "Good morning";
	} else {
		greeting = "Good afternoon";
	}
	return greeting;
}

function getUserName() {
	var userName = window.prompt("Hi - what's your name?");
	return userName;
}

function sayPersonalHello() {
	var userName = getUserName();
	if (userName == "") {
		window.alert("Sorry, I don't talk to strangers...");
		return;	
	}
	/* Get basic message */
	var message = getGreeting();

	/* Append name etc */
	message += ", " + userName + ", How are you?"
	
	var doWrite = confirm(message + "\nWould you like this greeting added to the page?");
	if (doWrite == true) {
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