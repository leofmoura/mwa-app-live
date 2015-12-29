(function(){
    'use strict';

    angular.module('mwa').controller('SideBarCtrl', SideBarCtrl);

    SideBarCtrl.$inject = ['$scope', '$location', '$ionicSideMenuDelegate'];

    function SideBarCtrl($scope, $location, $ionicSideMenuDelegate){
        $scope.navigateTo = navigateTo;

        activate();

        function activate(){

        }

        function navigateTo(path)
        {
            $location.path('/' + path);
            $ionicSideMenuDelegate.toggleLeft();
        }
  };

})();
