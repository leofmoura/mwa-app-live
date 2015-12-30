(function() {
    'use strict';

    angular.module('mwa', ['ionic']).run(function($ionicPlatform, $rootScope) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }

            $rootScope.cart = [];

            var cart = localStorage.getItem('mwa-cart');

            if (cart) {
                var items = angular.fromJson(cart);
                angular.forEach(items, function(value, key) {
                    $rootScope.cart.push(value);
                });
            }
        });

        document.addEventListener("deviceready", function() {

            $rootScope.network = $cordovaNetwork.getNetwork();
            $rootScope.isOnline = $cordovaNetwork.isOnline();
            $rootScope.$apply();

            // listen for Online event
            $rootScope.$on('$cordovaNetwork:online', function(event, networkState) {
                console.log("got online");
                $rootScope.isOnline = true;
                $rootScope.network = $cordovaNetwork.getNetwork();

                $rootScope.$apply();
            })

            // listen for Offline event
            $rootScope.$on('$cordovaNetwork:offline', function(event, networkState) {
                console.log("got offline");
                $rootScope.isOnline = false;
                $rootScope.network = $cordovaNetwork.getNetwork();

                $rootScope.$apply();
            })

        }, false);
    });
    angular.module('mwa').config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        //console.log($stateProvider);

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'pages/home/index.html',
            controller: 'HomeCtrl'
        });

        $stateProvider.state('products', {
            url: '/products',
            templateUrl: 'pages/product/index.html',
            controller: 'ProductCtrl'
        });

        $stateProvider.state('productDetails', {
            url: '/products/details/:id',
            templateUrl: 'pages/product/product-detail.html',
            controller: 'ProductDetailsCtrl'
        });

        $stateProvider.state('cart', {
            url: '/cart',
            templateUrl: 'pages/cart/index.html',
            controller: 'CartCtrl'
        });

    });
})();
