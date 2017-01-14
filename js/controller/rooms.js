app.controller('ArticlesCtrl', function($scope, Articles){

  $scope.articles = Articles.getArticles();

  console.log($scope.articles);
  //$scope.things = JSON.parse(JSON.stringify(posts));

});
