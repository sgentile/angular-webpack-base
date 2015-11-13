'use strict';

export default class AppConfig {
	constructor(){}
	
	/* @ngInject */
	static disableDebugInfo($compileProvider){
		$compileProvider.debugInfoEnabled(false);
	}

	static routing($urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/person');
	}

}