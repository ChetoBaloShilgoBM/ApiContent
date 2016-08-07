var bhavaniMotorApp = angular.module('BhavaniMotorApp', ['ngRoute', 'ngCookies']);
bhavaniMotorApp.run(function($location) {
 $location.url('/home');
})
bhavaniMotorApp.config(['$routeProvider',function($routeProvider) {
 $routeProvider.when('/home', {
 	templateUrl : 'home.html'
 }).when('/book-my-service', {
 	templateUrl : 'book-my-service.html'
 }).when('/products', {
 	templateUrl : 'products/products.html',
 	controller: 'productsController'
 }).when('/about', {
 	templateUrl : 'about.html'
 }).when('/services', {
 	templateUrl : 'services.html'
 }).otherwise({
 	redirect: '/home'
 })
}]); 
