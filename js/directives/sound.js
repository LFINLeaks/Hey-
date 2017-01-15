
app.directive('sound',function(){
  return{
    restrict: "E",
    link: function($scope,element,attrs) {

      element.bind('click', function(){
        element.addClass('playing');

        setTimeout(function(){
          element.removeClass('playing');
        },2000);

      });
    },

  };
});
