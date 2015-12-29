(function(){
  'use strict';

  angular.module('mwa').controller('HeadbarCtrl', HeadbarCtrl);

  HeadbarCtrl.$inject = ['$scope', '$ionicSideMenuDelegate'];

  function HeadbarCtrl($scope, $ionicSideMenuDelegate){
    $scope.toggleSideBar = toggleSideBar;

    activate();

    function activate(){

    }

    function toggleSideBar(){
      $ionicSideMenuDelegate.toggleLeft();
    };

  };

})();
