var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider

  .when('/',{templateUrl: 'partials/home.html', controller: 'ArticlesCtrl'})

  .when('/article/:id' , {templateUrl: 'partials/article.html', controller: 'ArticleSingleCtrl'})

  .when('/post' , {templateUrl: 'partials/posts.html', controller: 'PostsCtrl'})


  .otherwise({redirectTo : '/'});

});
