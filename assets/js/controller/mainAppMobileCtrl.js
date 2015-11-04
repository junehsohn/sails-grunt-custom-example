(function(window, $, angular){
	'use strict';

	var testAppMobile = angular.module('TestApp',['CommonFilter']);
	testAppMobile.controller('TestAppMobile.controller.TestAppMobileCtrl', ['$scope', '$timeout', TestAppMobileCtrl]);

	function TestAppMobileCtrl($scope, $timeout){
		var vm = this;

		vm.title = 'HELLO~!! MOBILE';
		vm.resetTitle = resetTitle;


		function resetTitle(__title){
			vm.title = 'HELLO~!! MOBILE';
		}

	}

})(window, window.jQuery ,window.angular);