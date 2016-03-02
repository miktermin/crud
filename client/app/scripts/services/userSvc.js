'use strict';

/**
 * @ngdoc function
 * @name crudApp.service:UserSvc
 * @description
 * # UserSvc
 * Service of the crudApp
 */
angular.module('crudApp').
  service('UserSvc', function ($resource, ApiUrls) {
    var actions = {
      getUsers: {
        method: 'GET',
        isArray: true
      },
      createUser: {
        method: 'POST',
        isArray: false
      },
      editUser: {
        method: 'PUT',
        isArray: false,
        url: ApiUrls.base + ApiUrls.editOrDeleteUser
      },
      deleteUser: {
        method: 'DELETE',
        isArray: false,
        url: ApiUrls.base + ApiUrls.editOrDeleteUser
      }
    };

    return $resource(ApiUrls.base, {}, actions);
  });
