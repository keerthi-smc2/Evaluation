'use strict';

/**
 * @namespace cart
 */


var server = require('server');
server.extend(module.superModule);

var CartModel = require('*/cartridge/models/cart');


server.post(
  'AddGiftWrap',
   server.middleware.https,
   function (req, res, next) {
   var BasketMgr = require('dw/order/BasketMgr');
   var Site = require('dw/system/Site');
   var Transaction = require('dw/system/Transaction');
   var URLUtils = require('dw/web/URLUtils');

   var currentBasket = BasketMgr.getCurrentBasket();

    if (!currentBasket) {
        res.setStatusCode(500);
        res.json({
        error: true,
        redirectUrl: URLUtils.url('Cart-Show').toString()
          });
        return next();
    }
    //  var giftWrapAmount = Site.getCurrent().getCustomPreferenceValue('giftWrapAmount');
    //  var grossPrice = currentBasket.totalGrossPrice.value;
    //  var total = currentBasket.totalGrossPrice.value + giftWrapAmount; 
     Transaction.wrap(function () {
                currentBasket.custom.giftWrap = true;
                currentBasket.custom.giftWrapAmount = 10;
                //currentBasket.totalGrossPrice.value = grossPrice + giftWrapAmount;
                
                
              });
      var cartModel = new CartModel(currentBasket);
      
    res.json({
      sucess : true,
      cart: cartModel
    });

   return next();
});

server.post(
    'RemoveGiftWrap',
     server.middleware.https,
     function (req, res, next) {
     var BasketMgr = require('dw/order/BasketMgr');
     var Transaction = require('dw/system/Transaction');
     var URLUtils = require('dw/web/URLUtils');
  
     var currentBasket = BasketMgr.getCurrentBasket();
  
      if (!currentBasket) {
          res.setStatusCode(500);
          res.json({
          error: true,
          redirectUrl: URLUtils.url('Cart-Show').toString()
            });
          return next();
      }

       Transaction.wrap(function () {
             currentBasket.custom.giftWrap = false;
             currentBasket.custom.giftWrapAmount = 0;

                });
      var cartModel = new CartModel(currentBasket);

    res.json({
      sucess : true, 
      cart: cartModel
    });
     return next();
  
});

module.exports = server.exports();