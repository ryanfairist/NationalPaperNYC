app.directive('headline',function(){
	return{
		restrict: 'E',
		scope:{
			info:'='
		},
		templateUrl:"js/directives/headline/html"
	}
});