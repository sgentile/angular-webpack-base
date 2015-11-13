'use strict';
export default class PersonController {
	constructor(PersonService){
		let objPerson = PersonService.getPerson();
		this.FullName = `${objPerson.FirstName} ${objPerson.LastName}`;	
	}
}