app.factory('carData', ['$http', function(http){
	var coreData = null;

	var CoreCartList = Store("Tcartlist");
	return{
		setCart:function(item){
			CoreCartList[item.name] = item;

			if (itme.num == 0) {
				delete CoreCartList[item.name];
			}

			Store('Tcartlist', CoreCarList)
		}.
		getCart: function() {
			return CoreCartList;
		},
		sendData: function(scope){
			http({
				url:'http://as-vip.missfresh.cn/v2/product/home/index?device_id=b2fbe2a8bd6a74aab4a2f83e237fe6eb&env=web&platform=web&tdk=149264955366498009782&uuid=b2fbe2a8bd6a74aab4a2f83e237fe6eb&version=2.3.7',
				method: "post",
				data: {

				}
			}).success(function(res){
				var data = res.product_list.slice(1);

				for(var i=0; i<data.length; i++) {
					data[i].num =0;

					for(var key in CoreCartList){
						if (key === data[i].name) {
							data[i].num = CoreCartList[key].num;
						}
					}
				}
				scope.list = data;
				coreData = data;
			}).error(function() {
				console.log('数据加载失败')
			});
		},
		getData:function() {
			return coreData;
		}

	}
}])