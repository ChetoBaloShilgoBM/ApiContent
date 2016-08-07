bhavaniMotorApp.controller('productsController', productsController);

productsController.$inject = ['$scope'];

function productsController ($scope) {
  $scope.productList = [
	  { imagePath: 'images/media/nissan.jpg', modelName: '2015 Nissan Juke', price: '$95,900' },
	  { imagePath: 'images/media/nissan.jpg', modelName: '2015 Nissan Juke', price: '$95,900' },
	  { imagePath: 'images/media/nissan.jpg', modelName: '2015 Nissan Juke', price: '$95,900' },
	  { imagePath: 'images/media/nissan.jpg', modelName: '2015 Nissan Juke', price: '$95,900' },
	  { imagePath: 'images/media/nissan.jpg', modelName: '2015 Nissan Juke', price: '$95,900' },
	  { imagePath: 'images/media/nissan.jpg', modelName: '2015 Nissan Juke', price: '$95,900' }
  ]
};