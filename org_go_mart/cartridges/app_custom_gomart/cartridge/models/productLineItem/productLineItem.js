'use strict';

var base = module.superModule;

var productDecorators = require('*/cartridge/models/product/decorators/index');
var productLineItemDecorators = require('*/cartridge/models/productLineItem/decorators/index');

module.exports = function productLineItem(product, apiProduct, options) {
    base.call(this, product, apiProduct, options);
    productDecorators.countryOfOrigin(product, apiProduct);
    productDecorators.giftWrapEligible(product, apiProduct);
    
    return product;
};
