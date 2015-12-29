(function(){
    'use strict';

    angular.module('mwa').controller('CartCtrl', CartCtrl);

    CartCtrl.$inject = ['$scope', '$rootScope'];

    function CartCtrl($scope, $rootScope){
    $scope.products = [];

    activate();

    function activate(){
        getItems();
    }

    function getItems(){
        angular.forEach($rootScope.cart, function(value, key){
            $scope.products.push(value);
        });
    }
  };
})();
