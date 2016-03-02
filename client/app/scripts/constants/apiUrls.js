'use strict';

/**
 * @ngdoc function
 * @name crudApp.constant:ApiUrls
 * @description
 * # ApiUrls
 * Constant of the crudApp
 */
angular.module('crudApp')
  .constant('ApiUrls', {
    base: 'http://localhost:3000/api/users/',
    editOrDeleteUser: ':id'
  });
