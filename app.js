(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy=this;
  toBuy.items=ShoppingListCheckOffService.getItemsToBuy();



}


function ShoppingListCheckOffService(){
  var service=this;
  var itemsToBuy=toBuy
}



})();
