app.controller('ArticlesCtrl', function($rootScope, $scope, Articles){

  $scope.home = true;
  $scope.articles = Articles.getArticles();


  //$scope.things = JSON.parse(JSON.stringify(posts));

});
