'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.deleteUserUidAuctionAid = function deleteUserUidAuctionAid (req, res, next) {
  User.deleteUserUidAuctionAid(req.swagger.params, res, next);
};

module.exports.deleteUserUidAuctionAidItemIid = function deleteUserUidAuctionAidItemIid (req, res, next) {
  User.deleteUserUidAuctionAidItemIid(req.swagger.params, res, next);
};

module.exports.deleteUserUidAuctionAidPlanPid = function deleteUserUidAuctionAidPlanPid (req, res, next) {
  User.deleteUserUidAuctionAidPlanPid(req.swagger.params, res, next);
};

module.exports.deleteUserUidAuctionAidPledgePid = function deleteUserUidAuctionAidPledgePid (req, res, next) {
  User.deleteUserUidAuctionAidPledgePid(req.swagger.params, res, next);
};

module.exports.deleteUserUidCartCidOrderOidItemIid = function deleteUserUidCartCidOrderOidItemIid (req, res, next) {
  User.deleteUserUidCartCidOrderOidItemIid(req.swagger.params, res, next);
};

module.exports.deleteUserUidPaymentPid = function deleteUserUidPaymentPid (req, res, next) {
  User.deleteUserUidPaymentPid(req.swagger.params, res, next);
};

module.exports.getUserUidAuctionAidItem = function getUserUidAuctionAidItem (req, res, next) {
  User.getUserUidAuctionAidItem(req.swagger.params, res, next);
};

module.exports.getUserUidAuctionAidItemIid = function getUserUidAuctionAidItemIid (req, res, next) {
  User.getUserUidAuctionAidItemIid(req.swagger.params, res, next);
};

module.exports.getUserUidAuctionAidPlan = function getUserUidAuctionAidPlan (req, res, next) {
  User.getUserUidAuctionAidPlan(req.swagger.params, res, next);
};

module.exports.getUserUidAuctionAidPlanPid = function getUserUidAuctionAidPlanPid (req, res, next) {
  User.getUserUidAuctionAidPlanPid(req.swagger.params, res, next);
};

module.exports.getUserUidAuctionAidPledgePid = function getUserUidAuctionAidPledgePid (req, res, next) {
  User.getUserUidAuctionAidPledgePid(req.swagger.params, res, next);
};

module.exports.getUserUidAuctionUidPledge = function getUserUidAuctionUidPledge (req, res, next) {
  User.getUserUidAuctionUidPledge(req.swagger.params, res, next);
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

module.exports.getUserUidRetailerInfo = function getUserUidRetailerInfo (req, res, next) {
  User.getUserUidRetailerInfo(req.swagger.params, res, next);
};

module.exports.getUserUidRetailerRidInfo = function getUserUidRetailerRidInfo (req, res, next) {
  User.getUserUidRetailerRidInfo(req.swagger.params, res, next);
};

module.exports.patchUserUidAuctionAid = function patchUserUidAuctionAid (req, res, next) {
  User.patchUserUidAuctionAid(req.swagger.params, res, next);
};

module.exports.patchUserUidAuctionAidItemIid = function patchUserUidAuctionAidItemIid (req, res, next) {
  User.patchUserUidAuctionAidItemIid(req.swagger.params, res, next);
};

module.exports.patchUserUidAuctionAidPlanPid = function patchUserUidAuctionAidPlanPid (req, res, next) {
  User.patchUserUidAuctionAidPlanPid(req.swagger.params, res, next);
};

module.exports.patchUserUidAuctionAidPledgePid = function patchUserUidAuctionAidPledgePid (req, res, next) {
  User.patchUserUidAuctionAidPledgePid(req.swagger.params, res, next);
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

module.exports.patchUserUidRetailerRidInfo = function patchUserUidRetailerRidInfo (req, res, next) {
  User.patchUserUidRetailerRidInfo(req.swagger.params, res, next);
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

module.exports.postUserUidAuctionAidItem = function postUserUidAuctionAidItem (req, res, next) {
  User.postUserUidAuctionAidItem(req.swagger.params, res, next);
};

module.exports.postUserUidAuctionAidPlan = function postUserUidAuctionAidPlan (req, res, next) {
  User.postUserUidAuctionAidPlan(req.swagger.params, res, next);
};

module.exports.postUserUidAuctionAidSave = function postUserUidAuctionAidSave (req, res, next) {
  User.postUserUidAuctionAidSave(req.swagger.params, res, next);
};

module.exports.postUserUidAuctionUidPledge = function postUserUidAuctionUidPledge (req, res, next) {
  User.postUserUidAuctionUidPledge(req.swagger.params, res, next);
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

module.exports.postUserUidRetailerInfo = function postUserUidRetailerInfo (req, res, next) {
  User.postUserUidRetailerInfo(req.swagger.params, res, next);
};
