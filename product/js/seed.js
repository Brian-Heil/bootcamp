var clearLocalStorageFlag = false;

var users;
if (localStorage.getItem('users') && !clearLocalStorageFlag) {
	users = JSON.parse(localStorage.getItem('users'));
} else {
	users = [];
	for(var i=0; i<50; i++) {
		users.push({
			firstname: Faker.Name.firstName(),
			lastname: Faker.Name.lastName(),
			city: Faker.Address.city(),
			state: Faker.Address.brState()
		});
	}
	localStorage.setItem('users',JSON.stringify(users));
}

var places;
if (localStorage.getItem('places') && !clearLocalStorageFlag) {
	places = JSON.parse(localStorage.getItem('places'));
} else {
	places = [];
	for(var i=0; i<50; i++) {
		places.push({
			name: Faker.Company.companyName(),
			lat: Faker.Address.latitude(),
			lng: Faker.Address.longitude()
		});
	}
	localStorage.setItem('places',JSON.stringify(places));
}