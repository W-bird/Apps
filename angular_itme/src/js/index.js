var app = angular.module("app", ["ngRoute", "ionic"]);
app.config(["$routeProvider",function(routeProvider) {
	routeProvider.when('/home', {
		templateUrl:"/view/home.html",
		controller: 'homeCtrl'
	}).when('/cart', {
		templateUrl:'/view/cart.html',
		contorller: 'cartCtrl'
	}).when('/info', {
		templateUrl: '/view/info.html',
		contorller: 'infoCtrl'
	}).when('/login', {
		templateUrl: '/view/login.html',
		contorller: 'loginCtrl'
	}).otherwise({
		redirectTo:'/home'
	})
}])