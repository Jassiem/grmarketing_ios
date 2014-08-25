// Service definition
grassroot.service('barcodeService', ['$http', function($http){
  var API_DOMAIN = "http://barcodes4.me/barcode/c39/";
  var image_type = '.png';
  var barcodeUrl = '';

  this.getBarcode = function() {
    return barcodeUrl;
  };

  this.setBarcode = function(productNumber) {
    barcodeUrl = API_DOMAIN + productNumber + image_type;
  }

}]);

