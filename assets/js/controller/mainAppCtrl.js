(function(window, $, angular){
	'use strict';

	var testApp = angular.module('TestApp',['CommonFilter']);
	testApp.controller('TestApp.controller.TestAppCtrl', ['$scope', '$timeout', TestAppCtrl]);

	function TestAppCtrl($scope, $timeout){
		var vm = this;

		vm.title = 'HELLO~!! DESKTOP';
		vm.resetTitle = resetTitle;

		function resetTitle(__title){
			vm.title = 'HELLO~!! DESKTOP';
		}

	}

})(window, window.jQuery ,window.angular);