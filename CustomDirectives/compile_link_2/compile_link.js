var app = angular.module('compilevlink', []);

app.directive("compileThis", 
	function()
	{
		return({
			restrict: "AE",
			compile:
				function(tElement, tAttrs){
					console.log("This was compiled");
					tElement.append("<div>This was compiled</div>");
				}
		});
	}
);

app.directive("linkThis",
	function()
	{
		return({
			restrict: "AE",
			link:
				function(scope,elmnt,attrs){
					console.log("This was linked");
					console.log(elmnt);
					elmnt.append("<div>This was linked</div>");
				}
		});
	}
);