angular.module('myApp')
.controller('logOutPageControl',function ($state) {
	var init= function init(){
          sessionStorage.clear();
          $state.go('root.index');
        }
   init();
});