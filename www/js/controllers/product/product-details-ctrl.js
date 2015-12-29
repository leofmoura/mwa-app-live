(function(){
    'use strict';

    angular.module('mwa').controller('ProductDetailsCtrl', ProductDetailsCtrl);

    ProductDetailsCtrl.$inject = ['$scope', '$location', '$rootScope', 'productFactory', '$stateParams'];

    function ProductDetailsCtrl($scope, $location, $rootScope, productFactory, $stateParams){
        $scope.product = {};
        $scope.addToCart = addToCart;

        activate();

        function activate(){
            getProduct($stateParams.id);
        }

        function addToCart(){
            $rootScope.cart.push($scope.product);
            localStorage.setItem('mwa-cart', angular.toJson($rootScope.cart));
            $location.path('/cart');
        }

        function getProduct(id){
            productFactory.getById(id).success(success).catch(fail);

            function success(data){
                $scope.product = data;
            }
            function fail(error){
                console.error(error);
            }
        }
    };
})();
