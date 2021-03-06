'use strict';

/**
 * @ngdoc service
 * @name titanClienteV2App.titanMidService
 * @description
 * # titanMidService
 * Service in the titanClienteV2App.
 */
angular.module('titanMidService',[])
  .factory('titanMidRequest', function ($http) {
    // Service logic
    // ...
    var path = "http://localhost:8081/v1/";
    // Public API here
    return {
      get: function (tabla,params) {
        return $http.get(path+tabla+"/?"+params);
      },
      post: function (tabla,elemento) {
        return $http.post(path+tabla,elemento);
      },
      put: function (tabla,id,elemento) {
        return $http.put(path+tabla+"/"+id,elemento);
      },
      delete: function (tabla,id) {
        return $http.delete(path+tabla+"/"+id);
      }
    };
  });
