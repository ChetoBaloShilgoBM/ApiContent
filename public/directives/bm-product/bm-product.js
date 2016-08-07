bhavaniMotorApp.directive('bmProduct', bmProduct);

bmProduct.$inject = [];

function bmProduct () {
	return {
		templateUrl: 'directives/bm-product/bm-product.html',
		scope: {
			product: '='
		},
		controller: function($scope){
		}
	}
};