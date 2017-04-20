app.controller('cartCtrl', ['$scope', function(scope){
	scope.name = "购物车控制器";

	scope.list = cartData.getCart();
}])		