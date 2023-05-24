"use strict";

var base = module.superModule;

function OrderModel(lineItemContainer, options) {
  base.call(this, lineItemContainer, options);
  this.countryOfOrigin =
    lineItemContainer.productLineItems[0].product.custom.countryOfOrigin3;
}
module.exports = OrderModel;
