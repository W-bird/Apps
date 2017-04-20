app.directive('singleCart', ['cartData', function(cartData){
	
	return {
		resdrict: 'E',
		link: function(scope, element, attr){
			scope.plus = function(item){
				item.num++;	
				cartData.setCart(item); //对购物车列表进行更新
			}	 

			scope.minus = function(item){
				item.num--;	 	
				cartData.setCart(item);
				if(item.num == 0 && attr.cartflag === 'cart') {
					//移除我们dom节点
					element.remove();
				}
			}	
		},
		templateUrl: '/src/js/widget/view/singleCart.html',
		scope: {
			item: '=data'
		},
		replace: true
	} 	
}])