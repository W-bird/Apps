app.directive('navBar', ['navData', function(navData){
	return {
		resdrict: 'E',
		templateUrl: '/src/js/widget/view/footerNav.html',
		scope:{

		},
		replace: true,
		link: function(scope, elemenet, attr){
			//初始化时所关联的行为 
			scope.list = navData.getList();

			scope.curIndex = navData.getCurIndex(location.hash);
			
			scope.mark = function(index){
				scope.curIndex = index;	 	
			}
		}
	}	 	
}])