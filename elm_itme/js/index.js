// function loca() {
// 	var hash = location.hash || '#diZhi';
// 	var bom = $(hash);
// 	bom.show();
// 	bom.siblings().hide();
// }
// loca();
// window.onhashchange = loca;



var HashModuleMap = {
	'diZhi': addressModule,
	'xiangQing': detailModule,
	'lieBiao': rlistModule,
	'shangJia': seekModule
}

var ModuleCache = {
	//判断模块是否被初始化
}

var prevModule = null,
	currentModule = null;

function routeControl() {
	var hash = location.hash.slice(1) || 'diZhi',
		khash = '';

	khash = hash;

	if (hash.indexOf('lieBiao') !== -1) {
		khash = 'lieBiao';
		rlistModule.loadList(hash)
	}

	var	module = HashModuleMap[khash];


	prevModule = currentModule;
	currentModule = module;

	if (prevModule) {
		prevModule.leave();
	}

	if (module.bindEvent) {
		module.bindEvent();
	}

	module.enter();


	if (!ModuleCache[khash]) {
		module.init();

		ModuleCache[khash] = true;
	}
}

routeControl();

window.onhashchange = function() {
	routeControl();
}
