//这个项目的核心入口文件

//第一步  ng的初始化

var app = angular.module('fruit', ['ngRoute', 'ionic']);

//ng的路由配置
//（对应的hash跳转到对应的视图中，同时对应的视图拥有对应的控制器）

app.config(['$routeProvider', function(routeProvider){
	routeProvider.when('/home', {
		templateUrl: '/view/home.html',
		controller: 'homeCtrl'
	}).when('/cart', {
		templateUrl: '/view/cart.html',
		controller: 'cartCtrl'
	}).when('/info', {
		templateUrl: '/view/info.html',
		controller: 'infoCtrl'
	}).when('/login', {
		templateUrl: '/view/login.html',
		controller: 'loginCtrl'
	}).otherwise({
		redirectTo: '/home'
	})
}]);