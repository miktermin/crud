'use strict';

/**
 * @ngdoc function
 * @name crudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crudApp
 */
angular.module('crudApp')
  .controller('ListCtrl', function ($scope, $state) {
// PUBLIC
//  VARIABLES
    $scope.users = [
      {
        first_name: 'Michael',
        last_name: 'Ter-Minasyan',
        age: 28,
        id: 1
      },
      {
        first_name: 'Artin',
        last_name: 'Shahverdian',
        age: 26,
        id: 2
      },
      {
        first_name: 'Annie',
        last_name: 'Karapetyan',
        age: 28,
        id: 3
      },
      {
        first_name: 'Arevik',
        last_name: 'Harutyunyan',
        age: 29,
        id: 4
      },
      {
        first_name: 'Arthur',
        last_name: 'Manasyan',
        age: 29,
        id: 5
      }
    ];

    $scope.addOrEditMode = false;

// PUBLIC
//  METHODS
    $scope.edit = function (index) {
      $scope.addOrEditMode = true;
      $scope.selectedUser = $scope.users[index];
    };

    $scope.save = function () {
      $scope.addOrEditMode = false;
      $scope.selectedUser = {};
    };

    $scope.remove = function (index) {
      $scope.users.splice(index, 1);
    };

    $scope.add = function () {
      $scope.addOrEditMode = true;
    };
  });
