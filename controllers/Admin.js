'use strict';

var url = require('url');


var Admin = require('./AdminService');


module.exports.postAdmin = function postAdmin (req, res, next) {
  Admin.postAdmin(req.swagger.params, res, next);
};
