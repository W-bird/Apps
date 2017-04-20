app.controller('homeCtrl', ['$scope', 'cartData', function(scope, cartData){
	scope.name = '首页控制器';
	//cartData 是购物车的数据中心

	if(!cartData.getData()) {
		cartData.sendData(scope); //发送Ajax数据
		return;
	}
	
	scope.list = cartData.getData();
	/*scope.changed = function(index){
		console.log('我进行了滑动', index);	 	
	}*/
}])