/**
*
* Permet d'ajouter un like
*
*/
app.directive('sound',function($http){
  return{
    restrict: "E",
    controller : function(){


      this.play = function(url){

        var audio = new Audio(url);
        console.log(url);
        audio.play();
      };
      //lightaction ng-click="lightCtrl.togglePower(device.id)"

    },
    controllerAs : 'soundCtrl',

  };
});
