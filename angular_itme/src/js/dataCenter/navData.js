app.factory('navData', function(){
	//导航条数据中心
	var list = [{
		name: '首页',
		href: '#/home',
		ion: 'ion-home'
	},{
		name: '购物车',
		href: '#/cart',
		ion: 'ion-android-cart'
	},{
		name: '信息',
		href: '#/info',
		ion: 'ion-settings'
	},{
		name: '个人',
		href: '#/login',
		ion: 'ion-person'
	}];
	return {
		getList: function(){
			return list;	 	
		},
		getCurIndex: function(name){
			for(var i =0; i < list.length; i++){
				if(name === list[i].href) {
					return i;
				}
			}	 	
		}
	}
})