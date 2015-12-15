var app = angular.module('lifecycle', []);

app.directive('outer', function(){
    return {
      restrict: 'EA',
      compile: function(tElem, tAttrs){
        console.log('outer: compile');
		tElem.append('<div>outer</div>');
        return {
          pre: function(scope, iElem, iAttrs){
			scope.last = "outer";
            console.log('outer: pre link');
          },
          post: function(scope, iElem, iAttrs){
			iAttrs.$set('style', 'display:block;border: 1px solid black;background:red ;');
			iElem.append('<div>Done</div>');
            console.log('outer: post link');
          }
        }
      }
    }
  });  
app.directive('middle', function(){
    return {
      restrict: 'EA',
      compile: function(tElem, tAttrs){
        console.log('middle: compile');
		tElem.append('<div>middle</div>');
        return {
          pre: function(scope, iElem, iAttrs){
			scope.middle = "middle";
            console.log('middle: pre link');
          },
          post: function(scope, iElem, iAttrs){
			iAttrs.$set('style', 'display:block;color:red;background:yellow');
            console.log('middle: post link');
          }
        }
      }
    }
  });  
app.directive('inner', function(){
    return {
      restrict: 'EA',
      compile: function(tElem, tAttrs){
        console.log('inner: compile');
		tElem.append('<div>inner</div>');
        return {
          pre: function(scope, iElem, iAttrs){
			scope.first = "inner";
            console.log('inner: pre link');
          },
          post: function(scope, iElem, iAttrs){
			iElem.append('<div>link order: '+scope.first+' '+scope.middle+' '+scope.last+'</div>');
			iAttrs.$set('style', 'display:block;color:white;background:blue');
            console.log('inner: post link');
          }
        }
      }
    }
  }); 