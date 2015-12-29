(function () {
    'use strict';
    angular.module('mwa').factory('productFactory', productFactory);

    productFactory.$inject = ['$http'];

    function productFactory($http) {
        var URL = 'http://localhost:3000/api/products';
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
