var app = angular.module("Card",[]);

app.directive("nameCard",function(){
	return{
		restrict: 'E',
		templateUrl: 'card.html',
		transclude: true,
		scope: { 		//isolate scope
			first: '@', //bind the value from local scope to a DOM attribute
			last: '@',
			major: '@',
			graduate: '@'
		},
		link: function link(scope, iElement, iAttrs, controller, transcludeFn)
			{
				iAttrs.$set('style', 'display: block; border: 1px solid black;');
			}
	}
});