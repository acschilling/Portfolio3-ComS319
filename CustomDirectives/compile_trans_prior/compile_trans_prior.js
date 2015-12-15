app = angular.module("together",[]);

app.directive("creditcardMaker", 
	function(){
		return({
			restrict: "AE",
			priority: 1,
			compile: 
				function(tElement, tAttrs)
				{
					tElement.prepend("<header><h1>Credit Card</h4><div>Credit Card #</h4></h1>");
					tAttrs.$set('style', 'display: block; border: 1px solid black;');
					console.log("compiled");
				}
			});
		});
		
app.directive("creditcardMaker", 
	function(){
		return({
			restrict: "AE",
			priority: 0,
			transclude: true,
			link: 
				function(scope, elmnt, attr, ctllr, transcludeFn)
				{
					transcludeFn(
						function(clone)
						{
							elmnt.append(clone);
							console.log("linked");
						});
				}
			});
		});