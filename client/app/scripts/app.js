'use strict';

/**
 * @ngdoc overview
 * @name crudApp
 * @description
 * # crudApp
 *
 * Main module of the application.
 */
angular.module('crudApp', [
  'ui.router'
]).config(function ($stateProvider) {
  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'views/list.html',
      controller: 'ListCtrl'
    })
});
