'use strict';
var URLUtils = require('dw/web/URLUtils');
var base = module.superModule;
/**
 * Creates a plain object that contains payment instrument information
 * @param {Object} userPaymentInstruments - current customer's paymentInstruments
 * @returns {Object} object that contains info about the current customer's payment instruments
 */
function getCustomerPaymentInstruments(userPaymentInstruments) {
    var paymentInstruments;

    paymentInstruments = userPaymentInstruments.map(function (paymentInstrument) {
        var result = {
            creditCardHolder: paymentInstrument.creditCardHolder,
            maskedCreditCardNumber: paymentInstrument.maskedCreditCardNumber,
            creditCardType: paymentInstrument.creditCardType,
            creditCardExpirationMonth: paymentInstrument.creditCardExpirationMonth,
            creditCardExpirationYear: paymentInstrument.creditCardExpirationYear,
            UUID: paymentInstrument.UUID
        };

        result.cardTypeImage = {
            src: URLUtils.staticURL('/images/' +
                paymentInstrument.creditCardType.toLowerCase().replace(/\s/g, '') +
                '-dark.svg'),
            alt: paymentInstrument.creditCardType
        };

        return result;
    });

    return paymentInstruments;
}


function getUserInfo(profile) {
    var result = null;
    if (profile) {
        result = {
            profileGender: profile.custom.profileGender,
            tShirtSize: profile.custom.tShirtSize,
            pantSize: profile.custom.pantSize,
            shoeSize: profile.custom.shoeSize		
        }
    };
    return result;
}

/**
 * Account class that represents the current customer's profile dashboard
 * @param {Object} currentCustomer - Current customer
 * @param {Object} addressModel - The current customer's preferred address
 * @param {Object} orderModel - The current customer's order history
 * @constructor
 */
function account(currentCustomer, addressModel, orderModel) {
    base.call(this,currentCustomer, addressModel, orderModel);
    this.userInfo = getUserInfo(currentCustomer.raw.profile);
}

account.getCustomerPaymentInstruments = getCustomerPaymentInstruments;

module.exports = account;