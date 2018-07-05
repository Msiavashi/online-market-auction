'use strict';

exports.deleteUserUidAuctionAid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUserUidAuctionAidPlanPid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  * pid (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUserUidCartCidOrderOidItemIid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * cid (String)
  * oid (String)
  * iid (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUserUidPaymentPid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * pid (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUserUidAuctionAidPlan = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUserUidAuctionAidPlanPid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  * pid (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUserUidAuctionsRegistered = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUserUidPaymentPid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * pid (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUserUidPopupNotification = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUserUidProfile = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.patchUserUidAuctionAid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  * body (AnonymousRepresentation68)
  **/
  // no response value expected for this operation
  res.end();
}

exports.patchUserUidAuctionAidPlanPid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  * pid (String)
  * body (AnonymousRepresentation93)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.patchUserUidCartCidOrderOidItemIid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * cid (String)
  * oid (String)
  * iid (String)
  * body (AnonymousRepresentation75)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.patchUserUidPasswordReset = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * body (AnonymousRepresentation63)
  **/
  // no response value expected for this operation
  res.end();
}

exports.patchUserUidProfile = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * body (AnonymousRepresentation60)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postUserLogin = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (AnonymousRepresentation55)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postUserRegister = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (AnonymousRepresentation52)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postUserUidAuction = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * body (AnonymousRepresentation64)
  **/
  // no response value expected for this operation
  res.end();
}

exports.postUserUidAuctionAidPlan = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  * body (AnonymousRepresentation88)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postUserUidAuctionAidSave = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  * body (AnonymousRepresentation80)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postUserUidCartItem = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * body (AnonymousRepresentation70)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postUserUidContactus = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * body (AnonymousRepresentation85)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postUserUidPaymentPidDiscountCodeApply = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * pid (String)
  * body (AnonymousRepresentation98)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postUserUidProductPidComment = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * pid (String)
  * body (AnonymousRepresentation78)
  **/
  // no response value expected for this operation
  res.end();
}

exports.postUserUidProductPidSave = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * pid (String)
  * body (AnonymousRepresentation82)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

