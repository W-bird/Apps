app.controller('homeCtrl', ['$scope', 'cartData', function(scope, cartData){
	scope.name = "首页";

	if (!cartData.getData()) {
		cartData.sendData(scope);
		return;
	}

	scope.list = cartData.getDate();
}])		