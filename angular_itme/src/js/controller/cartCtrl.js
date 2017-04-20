app.controller('cartCtrl', ['$scope', 'cartData', function(scope, cartData){
	scope.name = '购物车控制器';

	scope.list = cartData.getCart();
}])