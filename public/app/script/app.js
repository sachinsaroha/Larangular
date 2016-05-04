'use strict';
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
    when('/addCust', {
      pageTitle: 'Customers',
      templateUrl: 'template/addCustomer.html',
      controller : 'addCustomerCtrl'
    })
    .otherwise({
      redirectTo: '/addCust'
    });
}]);
    

/*
$routeProvider.when('/addCust', {templateUrl: 'template/addCustomer.html', 
								 controller: function($scope){
								 	$scope.something = 'hi';
								 }
								});

*/



/*

app.controller('myController', [ '$scope', function($scope){
	$scope.toggle= true;
	$scope.show = function(){
		$scope.toggle = true; 
	};
	$scope.hide = function(){
		$scope.toggle = false; 
	};
	$scope.customers = [{'name':'Ross'},
						{'name':'Chandler'},	
						{'name':'Joey'}
					   ];
	$scope.addCustomer = function(){
		$scope.customers.push({name:$scope.name});
		$scope.name='';

	};
}]);

*/
