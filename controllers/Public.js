'use strict';

var url = require('url');


var Public = require('./PublicService');


module.exports.getPaymentMethods = function getPaymentMethods (req, res, next) {
  Public.getPaymentMethods(req.swagger.params, res, next);
};

module.exports.getShipmentMethods = function getShipmentMethods (req, res, next) {
  Public.getShipmentMethods(req.swagger.params, res, next);
};

module.exports.postPaymentGatewayMellatCallback = function postPaymentGatewayMellatCallback (req, res, next) {
  Public.postPaymentGatewayMellatCallback(req.swagger.params, res, next);
};

module.exports.postPaymentPidConfirm = function postPaymentPidConfirm (req, res, next) {
  Public.postPaymentPidConfirm(req.swagger.params, res, next);
};
