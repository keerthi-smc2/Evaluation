'use strict';

module.exports = function (object, apiProduct, type) {
    Object.defineProperty(object, 'countryOfOrigin3', {
        enumerable: true,
        value: apiProduct.custom.countryOfOrigin3
    });
    
};    