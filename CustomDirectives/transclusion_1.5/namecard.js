var app = angular.module("Card",[]);

app.directive("nameCard",function(){
	return{
		restrict: 'EA',
		templateUrl: 'card.html',
		transclude: 'element',
		scope: { 		//isolate scope
			first: '@', //bind the value from local scope to a DOM attribute
			last: '@',
			major: '@',
			graduate: '@'
		},
		replace: true, //template will replace the directives element
		link: function(scope, iElement, iAttrs, controller, transcludeFn)
			{
				transcludeFn(scope,function(clone){
				iElement.append(clone); //clone is the transcluded element, must me added into the template
				iAttrs.$set('style', 'display: block; border: 1px solid black;');
				});
			}
	}
});