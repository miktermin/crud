'use strict';

/**
 * @ngdoc function
 * @name crudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crudApp
 */
angular.module('crudApp')
  .controller('ListCtrl', ['$scope', 'UserSvc', function ($scope, UserSvc) {
// PUBLIC
//  VARIABLES
//    $scope.users = [
//      {
//        first_name: 'Michael',
//        last_name: 'Ter-Minasyan',
//        age: 28,
//        id: 1
//      },
//      {
//        first_name: 'Artin',
//        last_name: 'Shahverdian',
//        age: 26,
//        id: 2
//      },
//      {
//        first_name: 'Annie',
//        last_name: 'Karapetyan',
//        age: 28,
//        id: 3
//      },
//      {
//        first_name: 'Arevik',
//        last_name: 'Harutyunyan',
//        age: 29,
//        id: 4
//      },
//      {
//        first_name: 'Arthur',
//        last_name: 'Manasyan',
//        age: 29,
//        id: 5
//      }
//    ];
    $scope.users = UserSvc.getUsers();


    $scope.addOrEditMode = false;
    $scope.file = '';

// PUBLIC
//  METHODS
    $scope.edit = function () {
       $scope.addOrEditMode = true;
    };

    $scope.saveEdit = function (index) {
      $scope.selectedUser = $scope.users[index];
      var userId = $scope.selectedUser.id;
      UserSvc.editUser({id: userId}, {
        first_name: $scope.selectedUser.first_name,
        last_name: $scope.selectedUser.last_name,
        age: $scope.selectedUser.age
      }, function () {
        $scope.users = UserSvc.getUsers();
      });
    };

    $scope.save = function () {
      $scope.addOrEditMode = false;

      UserSvc.createUser({
        first_name: $scope.selectedUser.first_name,
        last_name: $scope.selectedUser.last_name,
        age: $scope.selectedUser.age
      }, function () {
          $scope.users = UserSvc.getUsers();
      });
    };

    $scope.remove = function (index) {
      var userId = $scope.users[index].id;
      UserSvc.deleteUser({id: userId}, function () {
        $scope.users.splice(index, 1);
      });
    };

    $scope.add = function () {
      $scope.addOrEditMode = true;
      $scope.selectedUser = {};
    };
  }]);
