'use strict';
var moment = require("moment");
var Auction = require("../models/Auction");
var AuctionRegisterPlan = require("../models/AuctionRegisterPlan");
var ObjectId = require("mongoose").Types.ObjectId;
var AuctionRegister = require("../models/AuctionRegister");
var AuctionItem = require("../models/AuctionItem");
var PaymentMethod = require("../models/PaymentMethod");
var User = require("../models/User");

exports.getAuctionAdvertises = function(args, res, next) {
  /**
   * parameters expected in the args:
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

exports.getAuctionAid = async function(args, res, next) {
  /**
   * parameters expected in the args:
  * aid (String)
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
    let auction = await Auction.findById(args.aid.value);
    if (auction){
      let remainedTime = moment().diff(moment(auction.startDate), "seconds");
      auction = auction.toJSON();
      auction.remainedTime = remainedTime > 0 ? remainedTime : 0;
      res.status(200).send(auction);
    }else{
      res.status(404).send({message: "auction not found"});
    }
  } catch (error) {
    res.status(500).send({message: error.message});
  }
  
  
}

exports.getAuctionAidPopupNotification = function(args, res, next) {
  /**
   * parameters expected in the args:
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

exports.getAuctionAidRegister = async function(args, res, next) {
  /**
   * parameters expected in the args:
  * aid (String)
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

  try{
    const auction = await Auction.findById(args.aid.value);
    if (auction){
      const plans = await AuctionRegisterPlan.find({auction: ObjectId(args.aid.value)}).populate("plan");
      res.status(200).send({auction: auction, plans: plans});
    }else{
      res.status(404).send({message: "auction not found"});
    }
  }catch(error){
    res.status(500).send(error.message);
  }

}

exports.getAuctionCarousel = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pagenum (Double)
  * pagesize (Double)
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

exports.getAuctionDailyOffers = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pagenum (Double)
  * pagesize (Double)
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

exports.getAuctionEventsUpcoming = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pagneum (Double)
  * pagesize (Double)
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

exports.getAuctionNews = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pagenum (Double)
  * pagesize (Double)
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

exports.getAuctionUpcoming = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pagenum (Double)
  * pagesize (Double)
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

exports.getAuctionsFilterby = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pagesize (Double)
  * pagenum (Double)
  * from_date (date)
  * to_date (date)
  * categories (List)
  * user_id (Double)
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

exports.postAuctionAidRegister = async function(args, res, next) {
  /**
   * parameters expected in the args:
  * aid (String)
  * body (AnonymousRepresentation29)
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
    const auction = await Auction.findById(args.aid.value);
    const plan = await AuctionRegisterPlan.findOne(ObjectId(args.body.value.pid));
    const paymentMethod = await PaymentMethod.findOne(ObjectId(args.body.value.pmid));
    const auctionItems = await AuctionItem.find({auction: ObjectId(args.aid.value)});
    const user = User.findOne({username: args.auth.sub});

    if (auction && plan && paymentMethod && auctionItems && user){
      let register = new AuctionRegister({
        user: user._id,
        plan: plan,
        auctionItem: auctionItems
      });
      let registered = await register.save();

      res.status(200).send({message: "ok"});
    }else{
      res.status(404).send({message: "not found"});
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
  
}

