'use strict';
var Role = require('../models/Role');
var User = require('../models/User');
var auth = require('../Auth');
var AuctionRegister = require("../models/AuctionRegister");
var Auction = require("../models/Auction");

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

exports.deleteUserUidAuctionAidItemIid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
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

exports.deleteUserUidAuctionAidPledgePid = function(args, res, next) {
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

exports.getUserUidAuctionAidItem = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getUserUidAuctionAidItemIid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  * iid (String)
  **/
  // no response value expected for this operation
  res.end();
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

exports.getUserUidAuctionAidPledgePid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  * pid (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getUserUidAuctionUidPledge = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getUserUidAuctionsRegistered = async function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  **/
  //   var examples = {};
  // examples['application/json'] = { };
  // if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // }
  // else {
  //   res.end();
  // }
  try {
    const auctionRegister = await AuctionRegister.find({user: auth.sub}).populate({
      path: "plan",
      populate: {
        path: "auction",
        model: "Auction"
      }
    });
    const auctions = [];
    auctionRegister.forEach(element => {
      auctions.push(element.plan.auction);
    });

    res.status(200).send(auctions);
  } catch (error) {
    res.status(500).send({message: error.message});
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

exports.getUserUidProfile = async function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  **/
  //   var examples = {};
  // examples['application/json'] = { };
  // if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // }
  // else {
  //   res.end();
  // }
  try {
    const user = await User.findById(args.uid.value).select("-password");
    if (user){
      res.status(200).send(user);
    }
    res.status(400).send({message: "user not found"});
  } catch (error) {
    res.status(500).send({message: error.message});
  }
  
}

exports.getUserUidRetailerInfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getUserUidRetailerRidInfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * rid (String)
  **/
  // no response value expected for this operation
  res.end();
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

exports.patchUserUidAuctionAidItemIid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  * iid (String)
  * body (AnonymousRepresentation119)
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

exports.patchUserUidAuctionAidPledgePid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  * pid (String)
  * body (AnonymousRepresentation116)
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

exports.patchUserUidRetailerRidInfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * rid (String)
  * body (AnonymousRepresentation105)
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

exports.postUserLogin = async function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (AnonymousRepresentation55)
  **/
  //   var examples = {};
  // examples['application/json'] = { };
  // if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // }
  // else {
  //   res.end();
  // }

  var username = args.body.value.username;
  var password = args.body.value.password;
  const user = await User.findOne({username: username});
  console.log(username);
  console.log(password);
  console.log(user.username);
  if (user){
    user.comparePassword(password, (error, isMatch) => {
      console.log(error);
      if (isMatch){
        // generate token
        let token = auth.issueToken(username, user.role);
        res.status(202).send({message: "login successful", token: token});
      }else{
        res.status(406).send({message: "failed"});
      }
    });
  }else{
    res.status(404).send({message: "user not found"});
  }
  
}

exports.postUserRegister = async function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (AnonymousRepresentation52)
  **/
  //   var examples = {};
  // examples['application/json'] = { };
  // if(Object.keys(examples).length > 0) {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // }
  // else {
  //   res.end();
  // }

  var username = args.body.value.username;
  var password = args.body.value.password;
  var phoneNumber = args.body.value.mobile;
  var email = args.body.value.email;
  var gender = args.body.value.gender;
  var firstName = args.body.value.firstName;
  var lastName = args.body.value.lastName;

  // check user existance
  try {
    const checkUser = await User.findOne({username: username});
    if (checkUser){
      res.status(406).send({message: "user exists"});
    }
  } catch (error) {
      res.status(500).end(error.message);
  }


  const user = new User({
    name: {
      first: firstName,
      last: lastName
    },

    username: username,
    password: password,
    gender: gender,
    email: email,
    phoneNumber: phoneNumber,
  });

  try {
    const role = await Role.findOne({"role": Role.roleEnum.customer});
    user.role = role.id;
    let newUser = await user.save();
    res.status(201).send({message: "user created"});
  } catch (error) {
    res.status(500).end(error.message);
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

exports.postUserUidAuctionAidItem = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * aid (String)
  * body (AnonymousRepresentation111)
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

exports.postUserUidAuctionUidPledge = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * body (AnonymousRepresentation108)
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
  //   var examples = {};
  // examples['application/json'] = { };
  // if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // }
  // else {
  //   res.end();
  // }
  
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

exports.postUserUidRetailerInfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uid (String)
  * body (AnonymousRepresentation102)
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

