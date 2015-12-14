var app = angular.module('test', []);

function createDirective(name){  
  return function(){
    return {
      restrict: 'E',
      transclude: true,
	  template: '<div ng-transclude></div>',
      compile: function(tElem, tAttrs){
        console.log(name + ': compile');
        return {
          pre: function(scope, iElem, iAttrs){
            console.log(name + ': pre link');
          },
          post: function(scope, iElem, iAttrs){
            console.log(name + ': post link');
          }
        }
      }
    }
  }
}

app.directive('levelOne', createDirective('levelOne'));  
app.directive('levelTwo', createDirective('levelTwo'));  
app.directive('levelThree', createDirective('levelThree')); 