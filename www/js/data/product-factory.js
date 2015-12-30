(function() {
    'use strict';
    angular.module('mwa').factory('productFactory', productFactory);

    productFactory.$inject = ['$http'];

    function productFactory($http) {
        var URL = 'https://mwa-node-api-leofmoura.c9users.io/api/products';
        return {
            get: get,
            getById: getById
        };

        function get() {
            return $http.get(URL);
        }

        function getById(id) {
            return $http.get(URL + '/' + id);
        }
    }
})();
