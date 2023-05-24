'use strict';

var base = module.superModule;
var BasketMgr = require('dw/order/BasketMgr');
var formatMoney = require('dw/util/StringUtils').formatMoney;
var Site = require('dw/system/Site');
var Money = require('dw/value/Money');
var currentBasket = BasketMgr.getCurrentBasket();
var giftWrapAmount1 = Site.getCurrent().getCustomPreferenceValue('giftWrapAmount');


function getTotals(total) {
    return !total.available ? '-' : formatMoney(total);
}

function totals(lineItemContainer) {
    base.call(this, lineItemContainer);
    this.giftWrapMoney = lineItemContainer.custom.giftWrapAmount;
    var giftWrapAmount2 = lineItemContainer.custom.giftWrapAmount;
    this.giftWrapAmount = formatMoney(new Money(giftWrapAmount2, 'USD'));
    this.giftWrap = lineItemContainer.custom.giftWrap;
    var grandTotal =  lineItemContainer.totalGrossPrice.value;
    //  this.grandTotal = getTotals(lineItemContainer.totalGrossPrice);
    // this.giftWrapAmount1 = giftWrapAmount;
    // if(this.giftWrap  && this.giftWrapAmount) {
    //     let a = lineItemContainer.totalGrossPrice.add(new Money(Site.getCurrent().getCustomPreferenceValue('giftWrapAmount'), 'USD'));
    //     this.grandTotal = formatMoney(a);
    // }
    // if(!this.giftWrap && this.giftWrapAmount){
    //     // let a = lineItemContainer.totalGrossPrice;
    //     let a = lineItemContainer.totalGrossPrice.subtract(new Money(Site.getCurrent().getCustomPreferenceValue('giftWrapAmount'), 'USD'));
    //     this.grandTotal = formatMoney(a);
    // }
    if(this.giftWrap === true && this.giftWrapMoney) {
        var grandTotal = grandTotal + giftWrapAmount2;
        this.grandTotal = formatMoney(new Money(grandTotal, 'USD'));
       } else {
        this.grandTotal = getTotals(lineItemContainer.totalGrossPrice);
    }
    //if(lineItemContainer.custom.giftWrap === true && lineItemContainer.custom.giftWrapAmount) {
    //     var money = require('*/cartridge/scripts/test');
    //     var grandTotal = money.giftWrapMoney(lineItemContainer);
    //     this.grandTotal = formatMoney(new Money(grandTotal, 'USD'));
    //     this.giftWrapAmount = formatMoney(new Money(giftWrapAmount1, 'USD'));
    // // } else {
    //    this.grandTotal = getTotals(lineItemContainer.totalGrossPrice);
    // }
}
module.exports = totals;

