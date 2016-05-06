//'use strict';
var apiPath = 'http://localhost:8888/l5angular/public';

angular
	.module('myApp')
	.controller('searchCustomerCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.title = 'wergerg';

	$scope.toggle= true;
	$scope.show = function(){
		$scope.toggle = true; 
	};
	$scope.hide = function(){
		$scope.toggle = false; 
	};
	
	$http.get(apiPath + '/customers')
    .then(function(response) {
        $scope.customers = response.data;
    });

	$scope.addCustomer = function(){
		$scope.customers.push({name:$scope.name});
		$scope.name='';
	};
	}])
	.controller('addCustomerCtrl', function($scope, $http) {
    //retrieve employees listing from API
    $http.get(apiPath + "/customers")
            .success(function(response) {
                $scope.employees = response;
            });
    
    //show modal form
    $scope.toggle = function(modalstate, id) {
        $scope.modalstate = modalstate;

        switch (modalstate) {
            case 'add':
                $scope.form_title = "Add New Employee";
                $scope.employee = "";
                break;
            case 'edit':
                $scope.form_title = "Employee Detail";
                $scope.id = id;
                $http.get(apiPath + '/customers/' + id)
                        .success(function(response) {
                            $scope.employee = response;
                        });
                break;
            default:
                break;
        }
        console.log(id);
        $('#myModal').modal('show');
    }

    //save new record / update existing record
    $scope.save = function(modalstate, id) {
        var url = apiPath + "/customers";
        
        //append employee id to the URL if the form is in edit mode
        if (modalstate === 'edit'){
            url += "/" + id;
        }
        
        $http({
            method: 'POST',
            url: url,
            data: $.param($scope.employee),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(response) {
            console.log(response);
            location.reload();
        }).error(function(response) {
            console.log(response);
            alert('This is embarassing. An error has occured. Please check the log for details');
        });
    }

    //delete record
    $scope.confirmDelete = function(id) {
        var isConfirmDelete = confirm('Are you sure you want this record?');
        if (isConfirmDelete) {
            $http({
                method: 'DELETE',
                url: apiPath + '/customers/' + id
            }).
                    success(function(data) {
                        console.log(data);
                        location.reload();
                    }).
                    error(function(data) {
                        console.log(data);
                        alert('Unable to delete');
                    });
        } else {
            return false;
        }
    }
});
