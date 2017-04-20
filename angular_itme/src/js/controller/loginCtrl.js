app.controller('loginCtrl', ['$scope', 'loginData', function(scope, loginData){
	scope.name = '登陆控制器';

	scope.userInfo = {
		phone: '18380591357',
		code: '346499'
	} 	

	scope.sendCode = function(){
		loginData.sendCode(scope); 	
	}
	scope.submit = function(){
		//登陆提交操作
		console.log(scope.userInfo);	
		loginData.submit(scope); 	
	}
}])