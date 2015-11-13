'use strict';

class PersonService {
	constructor($http){
		this.$http = $http;
	}
	
	getPerson(){
		// In a real app, you'd use $http in here to fetch data from server.
		return {
			FirstName: 'David',
			LastName: 'Benson'
		};
	}
}

export default angular
	.module ('app.person-service', [])
	.service('PersonService', PersonService)
	.name;