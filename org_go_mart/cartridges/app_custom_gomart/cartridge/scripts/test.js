'use strict;'


function giftWrapMoney(lineItemContainer) {
    var giftWrap = lineItemContainer.custom.giftWrap;
    var giftWrapAmount = lineItemContainer.custom.giftWrapAmount;
    var grandTotal = lineItemContainer.totalGrossPrice.value;
    var finalTotal;
    if(giftWrap === true && giftWrapAmount) {
        finalTotal = grandTotal + giftWrapAmount;
    }
    return finalTotal;
}
module.exports.giftWrapMoney = giftWrapMoney;