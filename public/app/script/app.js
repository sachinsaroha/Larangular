//'use strict';
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/search', { 
    	pageTitle: 'Search', 
    	templateUrl: 'template/searchCustomer.html',
      	controller : 'searchCustomerCtrl'
    })
    .when('/addCust', { 
    	pageTitle: 'addCustomer', 
    	templateUrl: 'template/addCustomer.html',
      	controller : 'addCustomerCtrl'
    })
    .otherwise({
      redirectTo: '/search'
    });

}]);
    

