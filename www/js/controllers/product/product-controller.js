(function(){
    'use strict';

    angular.module('mwa').controller('ProductCtrl', ProductCtrl);

    ProductCtrl.$inject = ['$scope', 'productFactory'];

    function ProductCtrl($scope, productFactory){

        $scope.products = [];

        activate();

        function activate(){
            getProducts();
        }

        function getProducts(){
            productFactory.get().success(success).catch(fail);

            function success(data){
                $scope.products = data;
            }
            function fail(error){
                console.log(error);
            }
        }
    };
})();
