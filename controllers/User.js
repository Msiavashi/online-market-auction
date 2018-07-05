'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.deleteUserUidAuctionAid = function deleteUserUidAuctionAid (req, res, next) {
  User.deleteUserUidAuctionAid(req.swagger.params, res, next);
};

module.exports.deleteUserUidAuctionAidPlanPid = function deleteUserUidAuctionAidPlanPid (req, res, next) {
  User.deleteUserUidAuctionAidPlanPid(req.swagger.params, res, next);
};

module.exports.deleteUserUidCartCidOrderOidItemIid = function deleteUserUidCartCidOrderOidItemIid (req, res, next) {
  User.deleteUserUidCartCidOrderOidItemIid(req.swagger.params, res, next);
};

module.exports.deleteUserUidPaymentPid = function deleteUserUidPaymentPid (req, res, next) {
  User.deleteUserUidPaymentPid(req.swagger.params, res, next);
};

module.exports.getUserUidAuctionAidPlan = function getUserUidAuctionAidPlan (req, res, next) {
  User.getUserUidAuctionAidPlan(req.swagger.params, res, next);
};

module.exports.getUserUidAuctionAidPlanPid = function getUserUidAuctionAidPlanPid (req, res, next) {
  User.getUserUidAuctionAidPlanPid(req.swagger.params, res, next);
};

module.exports.getUserUidAuctionsRegistered = function getUserUidAuctionsRegistered (req, res, next) {
  User.getUserUidAuctionsRegistered(req.swagger.params, res, next);
};

module.exports.getUserUidPaymentPid = function getUserUidPaymentPid (req, res, next) {
  User.getUserUidPaymentPid(req.swagger.params, res, next);
};

module.exports.getUserUidPopupNotification = function getUserUidPopupNotification (req, res, next) {
  User.getUserUidPopupNotification(req.swagger.params, res, next);
};

module.exports.getUserUidProfile = function getUserUidProfile (req, res, next) {
  User.getUserUidProfile(req.swagger.params, res, next);
};

module.exports.patchUserUidAuctionAid = function patchUserUidAuctionAid (req, res, next) {
  User.patchUserUidAuctionAid(req.swagger.params, res, next);
};

module.exports.patchUserUidAuctionAidPlanPid = function patchUserUidAuctionAidPlanPid (req, res, next) {
  User.patchUserUidAuctionAidPlanPid(req.swagger.params, res, next);
};

module.exports.patchUserUidCartCidOrderOidItemIid = function patchUserUidCartCidOrderOidItemIid (req, res, next) {
  User.patchUserUidCartCidOrderOidItemIid(req.swagger.params, res, next);
};

module.exports.patchUserUidPasswordReset = function patchUserUidPasswordReset (req, res, next) {
  User.patchUserUidPasswordReset(req.swagger.params, res, next);
};

module.exports.patchUserUidProfile = function patchUserUidProfile (req, res, next) {
  User.patchUserUidProfile(req.swagger.params, res, next);
};

module.exports.postUserLogin = function postUserLogin (req, res, next) {
  User.postUserLogin(req.swagger.params, res, next);
};

module.exports.postUserRegister = function postUserRegister (req, res, next) {
  User.postUserRegister(req.swagger.params, res, next);
};

module.exports.postUserUidAuction = function postUserUidAuction (req, res, next) {
  User.postUserUidAuction(req.swagger.params, res, next);
};

module.exports.postUserUidAuctionAidPlan = function postUserUidAuctionAidPlan (req, res, next) {
  User.postUserUidAuctionAidPlan(req.swagger.params, res, next);
};

module.exports.postUserUidAuctionAidSave = function postUserUidAuctionAidSave (req, res, next) {
  User.postUserUidAuctionAidSave(req.swagger.params, res, next);
};

module.exports.postUserUidCartItem = function postUserUidCartItem (req, res, next) {
  User.postUserUidCartItem(req.swagger.params, res, next);
};

module.exports.postUserUidContactus = function postUserUidContactus (req, res, next) {
  User.postUserUidContactus(req.swagger.params, res, next);
};

module.exports.postUserUidPaymentPidDiscountCodeApply = function postUserUidPaymentPidDiscountCodeApply (req, res, next) {
  User.postUserUidPaymentPidDiscountCodeApply(req.swagger.params, res, next);
};

module.exports.postUserUidProductPidComment = function postUserUidProductPidComment (req, res, next) {
  User.postUserUidProductPidComment(req.swagger.params, res, next);
};

module.exports.postUserUidProductPidSave = function postUserUidProductPidSave (req, res, next) {
  User.postUserUidProductPidSave(req.swagger.params, res, next);
};
