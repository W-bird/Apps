app.factory('navData', [function(){
	var list = [{
		name: 'home',
		href: '#/home',
		ion: 'ion-home'
	},{
		name: 'cart',
		href: '#/cart',
		ion: 'ion-star'
	},{
		name: 'info',
		href: '#/info',
		ion: 'ion-settings'
	},{
		name: 'login',
		href: '#/login',
		ion: 'ion-document'
	}];
	return {
		getList:function() {
			return list;
		},
		getCurIndex:function(name) {
			for(var i=0; i<list.length; i++) {
				if (name === list[i].name) {
					return i;
				}
			}
		}
	}
}])