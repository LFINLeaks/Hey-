app.controller('ArticleSingleCtrl', function ($scope, Articles, $routeParams) {
  console.log($routeParams.id);


  // $scope.room = Things.getDevices(id);
  $scope.article =  Articles.getArticle($routeParams.id);

});
