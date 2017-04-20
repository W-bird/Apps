app.controller('infoCtrl', ['$scope', '$ionicModal', function(scope, ionicModal){
	scope.name = '信息控制器';
	scope.login = false;  //默认是未登陆状态 


	//定义对应modal框
	ionicModal.fromTemplateUrl('/src/js/widget/view/login.html', {
	   scope: scope,
	   animation: 'slide-in-up'
	 }).then(function(modal) {
	   scope.modal = modal;

	    scope.modal.show();
	 });

	scope.showLogin = function(){
		//展示登录框
		scope.modal.show();	 	
	}	

	scope.hide = function(){
		scope.modal.hide(); 	 	
	}
}])