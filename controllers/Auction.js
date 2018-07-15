'use strict';

var url = require('url');


var Auction = require('./AuctionService');


module.exports.getAuctionAdvertises = function getAuctionAdvertises (req, res, next) {
  Auction.getAuctionAdvertises(req.swagger.params, res, next);
};

module.exports.getAuctionAid = function getAuctionAid (req, res, next) {
  Auction.getAuctionAid(req.swagger.params, res, next);
};

module.exports.getAuctionAidPopupNotification = function getAuctionAidPopupNotification (req, res, next) {
  Auction.getAuctionAidPopupNotification(req.swagger.params, res, next);
};

module.exports.getAuctionAidRegister = function getAuctionAidRegister (req, res, next) {
  Auction.getAuctionAidRegister(req.swagger.params, res, next);
};

module.exports.getAuctionCarousel = function getAuctionCarousel (req, res, next) {
  Auction.getAuctionCarousel(req.swagger.params, res, next);
};

module.exports.getAuctionDailyOffers = function getAuctionDailyOffers (req, res, next) {
  Auction.getAuctionDailyOffers(req.swagger.params, res, next);
};

module.exports.getAuctionEventsUpcoming = function getAuctionEventsUpcoming (req, res, next) {
  Auction.getAuctionEventsUpcoming(req.swagger.params, res, next);
};

module.exports.getAuctionNews = function getAuctionNews (req, res, next) {
  Auction.getAuctionNews(req.swagger.params, res, next);
};

module.exports.getAuctionUpcoming = function getAuctionUpcoming (req, res, next) {
  Auction.getAuctionUpcoming(req.swagger.params, res, next);
};

module.exports.getAuctionsFilterby = function getAuctionsFilterby (req, res, next) {
  Auction.getAuctionsFilterby(req.swagger.params, res, next);
};

module.exports.postAuctionAidRegister = function postAuctionAidRegister (req, res, next) {
  Auction.postAuctionAidRegister(req.swagger.params, res, next);
};
