(function() {
	'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LCController);

	// protect against minification
	LCController.$inject = ['$scope'];

	function LCController($scope){
		$scope.dishes = "";

		$scope.countDishes = function(){
			var msg = 'Too much!', 
				// generate a new list with empties removed (have at least
				// one non-empty string character)
				dishes = $scope.dishes.split(',').filter(function(dish){
					return dish && dish.trim().length > 0;
				}),
				count = dishes.length,
				colorTxt = 'greenTxt',
				colorBdr = 'greenBorder';

			switch(count){
				case 0:
					msg = 'Please enter data first';
					colorTxt = 'redTxt';
					colorBdr = 'redBorder';
					break;
				case 1:
				case 2:
				case 3:
					msg = 'Enjoy!';
					break;
			}				

			// set the message value
			$scope.dishMessage = msg;
			// set the message and input color class
			$scope.msgColor = colorTxt;
			$scope.inputColor = colorBdr;
		};
	}
})();