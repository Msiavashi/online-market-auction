'use strict';

var url = require('url');


var Shop = require('./ShopService');


module.exports.getShopAdvertises = function getShopAdvertises (req, res, next) {
  Shop.getShopAdvertises(req.swagger.params, res, next);
};

module.exports.getShopCarousel = function getShopCarousel (req, res, next) {
  Shop.getShopCarousel(req.swagger.params, res, next);
};

module.exports.getShopCategories = function getShopCategories (req, res, next) {
  Shop.getShopCategories(req.swagger.params, res, next);
};

module.exports.getShopCategoryCid = function getShopCategoryCid (req, res, next) {
  Shop.getShopCategoryCid(req.swagger.params, res, next);
};

module.exports.getShopCategoryCidProductsFilterby = function getShopCategoryCidProductsFilterby (req, res, next) {
  Shop.getShopCategoryCidProductsFilterby(req.swagger.params, res, next);
};

module.exports.getShopDailyOffers = function getShopDailyOffers (req, res, next) {
  Shop.getShopDailyOffers(req.swagger.params, res, next);
};

module.exports.getShopEventsUpcoming = function getShopEventsUpcoming (req, res, next) {
  Shop.getShopEventsUpcoming(req.swagger.params, res, next);
};

module.exports.getShopNews = function getShopNews (req, res, next) {
  Shop.getShopNews(req.swagger.params, res, next);
};

module.exports.getShopPopupNotification = function getShopPopupNotification (req, res, next) {
  Shop.getShopPopupNotification(req.swagger.params, res, next);
};

module.exports.getShopProductPid = function getShopProductPid (req, res, next) {
  Shop.getShopProductPid(req.swagger.params, res, next);
};

module.exports.getShopProductPidComments = function getShopProductPidComments (req, res, next) {
  Shop.getShopProductPidComments(req.swagger.params, res, next);
};

module.exports.postShopContactus = function postShopContactus (req, res, next) {
  Shop.postShopContactus(req.swagger.params, res, next);
};
