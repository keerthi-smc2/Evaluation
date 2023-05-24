'use strict';

var base = module.superModule;

var decorators = require('*/cartridge/models/product/decorators/index');
var promotionCache = require('*/cartridge/scripts/util/promotionCache');

module.exports = function productTile(product, apiProduct, productType) {
    var productHelper = require('*/cartridge/scripts/helpers/productHelpers');
    var productSearchHit = productHelper.getProductSearchHit(apiProduct);
    base.call(this, product, apiProduct, productType);
    decorators.countryOfOrigin(product, apiProduct);
   
    return product;
};
