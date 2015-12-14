var app = angular.module('test', []);

app.directive('levelOne', function(){
    return {
      restrict: 'EA',
      compile: function(tElem, tAttrs){
        console.log('levelOne: compile');
		tElem.append('<div>1:levelOne</div>');
        return {
          pre: function(scope, iElem, iAttrs){
			scope.levelOne = "levelOne";
            console.log('levelOne: pre link');
          },
          post: function(scope, iElem, iAttrs){
			iAttrs.$set('style', 'display:block;border: 1px solid black;background:red ;');
			iElem.append('<div>Done</div>');
            console.log('levelOne: post link');
          }
        }
      }
    }
  });  
app.directive('levelTwo', function(){
    return {
      restrict: 'EA',
      compile: function(tElem, tAttrs){
        console.log('levelTwo: compile');
		tElem.append('<div>2:levelTwo</div>');
        return {
          pre: function(scope, iElem, iAttrs){
			scope.levelTwo = "levelTwo";
            console.log('levelTwo: pre link');
          },
          post: function(scope, iElem, iAttrs){
			iAttrs.$set('style', 'display:block;color:red;background:yellow');
            console.log('levelTwo: post link');
          }
        }
      }
    }
  });  
app.directive('levelThree', function(){
    return {
      restrict: 'EA',
      compile: function(tElem, tAttrs){
        console.log('levelThree: compile');
		tElem.append('<div>3:levelThree</div>');
        return {
          pre: function(scope, iElem, iAttrs){
			scope.levelThree = "levelThree";
            console.log('levelThree: pre link');
          },
          post: function(scope, iElem, iAttrs){
			iElem.append('<div>link '+scope.levelOne+' '+scope.levelTwo+' '+scope.levelThree+'</div>');
			iAttrs.$set('style', 'display:block;color:white;background:blue');
            console.log('levelThree: post link');
          }
        }
      }
    }
  }); 