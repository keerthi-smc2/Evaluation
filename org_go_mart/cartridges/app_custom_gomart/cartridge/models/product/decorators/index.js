'use strict';

var extend = require('server/assign');
module.exports = extend(module.superModule, {

    // countryOfOrigin: require('*/cartridge/models/product/decorators/countryOfOrigin'),
    giftWrapEligible: require('*/cartridge/models/product/decorators/giftWrapEligible')
});