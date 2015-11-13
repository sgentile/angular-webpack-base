'use strict';
import angular from 'npm/angular';
import uirouter from 'npm/angular-ui-router';

// Dependencies
import PersonService from '../../services/person.service';

// Setup
require('./person.less');
import PersonController from './person.controller';
import PersonTemplate from './person.template.html';

export default angular
	.module('app.person-route', [uirouter, PersonService])
	.controller('PersonController', PersonController)
	.config($stateProvider => {
		$stateProvider.state('person', {
			url: '/person',
			template: PersonTemplate,
			controller: 'PersonController',
			controllerAs: 'vm'
		});
	}).name;