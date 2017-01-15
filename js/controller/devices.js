app.controller('ArticleSingleCtrl', function ($scope, Articles, $routeParams) {
  console.log($routeParams.id);


  // $scope.room = Things.getDevices(id);
  $scope.article =  Articles.getArticle($routeParams.id);

  var status = null;
  var audio = null;

  $scope.play = function(url){
    if(status == "playing") audio.pause();
    audio = new Audio(url);
    audio.play();
    status = "playing";
  };


});
