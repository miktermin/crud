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
  'ui.router',
  'ngResource'
]).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('list', {
      url: '/',
      templateUrl: 'views/list.html',
      controller: 'ListCtrl'
    });

  $urlRouterProvider.otherwise('/');
});
