'use strict';

module.exports = function (object, apiProduct, type) {
    Object.defineProperty(object, 'giftWrapEligible', {
        enumerable: true,
        value: apiProduct.custom.giftWrapEligible
    });
    
};    