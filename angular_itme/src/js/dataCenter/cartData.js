app.factory('cartData', ['$http', function(http){
	var coreData = null;  //核心购物车数据

	//很重要 承上启下， 我们的核心

	var CoreCartList = Store('Tcartlist'); //核心购物车列表数据
	return {
		setCart: function(item){
			//动态创建我们的购物车列表对象
			CoreCartList[item.name] = item;	
			if(item.num == 0) {
				delete CoreCartList[item.name];
			} 	

			//设置缓存
			Store('Tcartlist', CoreCartList);
		},
		getCart: function(){
			return CoreCartList;		 	
		},
		sendData: function(scope){
			//scope
			http({
				url: 'http://as-vip.missfresh.cn/v2/product/home/index?device_id=b2fbe2a8bd6a74aab4a2f83e237fe6eb&env=web&platform=web&tdk=149264955366498009782&uuid=b2fbe2a8bd6a74aab4a2f83e237fe6eb&version=2.3.7',
				method: 'post',
				data: {

				}
			}).success(function(res){
				console.log('数据请求成功', res);
				var data =  res.product_list.slice(1);

				for(var i =0; i < data.length; i++) {
					data[i].num = 0;

					for(var key in CoreCartList) {
						if(key === data[i].name) {
							data[i].num = CoreCartList[key].num;
							CoreCartList[key] = data[i]; //进行数据同步引用
						}
					}
				}
				scope.list = data;
				coreData = data;  //此时给核心购物车数据进行赋值

			}).error(function(){
				console.log('数据失败了');	 	
			})
		},
		getData: function(){
			return coreData;	 	
		}
	} 	
}])