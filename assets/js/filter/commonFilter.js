angular.module('CommonFilter', []);
angular.module('CommonFilter').filter('addYap',function($filter){
	return function(input){
		return input+' => yap~!';
	};
});