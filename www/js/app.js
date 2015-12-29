(function(){
    'use strict';

    angular.module('mwa', ['ionic']).run(function($ionicPlatform, $rootScope){
        $ionicPlatform.ready(function(){
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }

            $rootScope.cart = [];

            var cart = localStorage.getItem('mwa-cart');

            if (cart){
                var items = angular.fromJson(cart);
                angular.forEach(items, function(value, key){
                    $rootScope.cart.push(value);
                });
            }
        });
    });
    angular.module('mwa').config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        //console.log($stateProvider);

        $stateProvider.state('home', {
            url: '/',
            templateUrl:'pages/home/index.html',
            controller:'HomeCtrl'
        });

        $stateProvider.state('products', {
            url: '/products',
            templateUrl:'pages/product/index.html',
            controller:'ProductCtrl'
        });

        $stateProvider.state('productDetails', {
            url: '/products/details/:id',
            templateUrl:'pages/product/product-detail.html',
            controller:'ProductDetailsCtrl'
        });

        $stateProvider.state('cart', {
            url: '/cart',
            templateUrl:'pages/cart/index.html',
            controller:'CartCtrl'
        });

    });
})();
