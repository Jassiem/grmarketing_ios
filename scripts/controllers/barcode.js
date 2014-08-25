function BarcodeCtrl($scope, barcodeService) {
	$scope.barcodeSrc = barcodeService.getBarcode();
};

BarcodeCtrl.$inject = ['$scope', 'barcodeService'];