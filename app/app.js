(function() {
	'use strict';

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/

	angular.module('ejdirectivas', [
		'ngResource',
		'ngAria',
		'ngMaterial',
		
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'home',
	]);

})();
