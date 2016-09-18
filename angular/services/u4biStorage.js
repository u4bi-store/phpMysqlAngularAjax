var app = angular.module('AppU4bi')
	.factory('u4biStorage', function ($http, $injector){
		'use strict';
		
		return $http.get('/api')
			.then(function (){
					return $injector.get('api');
			}, function(){
					return $injector.get('localStorage');
			});
	})
	.factory('api', function($resource){
		
	})