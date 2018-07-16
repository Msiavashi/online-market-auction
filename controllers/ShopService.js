'use strict';

var Product = require("../models/Product");
var Category = require("../models/Category");
var ObjectId = require("mongoose").Types.ObjectId;

exports.getShopAdvertises = function(args, res, next) {
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

exports.getShopCarousel = function(args, res, next) {
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

exports.getShopCategories = async function(args, res, next) {
  /**
   * parameters expected in the args:
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
    const categories = await Category.find({});
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
  
  
}

exports.getShopCategoryCid = async function(args, res, next) {
  /**
   * parameters expected in the args:
  * cid (String)
  * pagenum (Double)
  * pagesize (Double)
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
    const products = await Product.find({category: ObjectId(args.cid.value)});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
  
  
}

exports.getShopCategoryCidProductsFilterby = function(args, res, next) {
  /**
   * parameters expected in the args:
  * cid (String)
  * pagenum (Double)
  * pagesize (Double)
  * price_floor (Double)
  * price_ceiling (Double)
  * manufacture (List)
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

exports.getShopDailyOffers = function(args, res, next) {
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

exports.getShopEventsUpcoming = function(args, res, next) {
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

exports.getShopNews = function(args, res, next) {
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

exports.getShopPopupNotification = function(args, res, next) {
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

exports.getShopProductPid = async function(args, res, next) {
  /**
   * parameters expected in the args:
  * pid (String)
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
    const product = await Product.findById(args.pid.value);
    if (product){
      res.status(200).send(product);
    }else{
      res.status(404).send({message: "product not found"});
    }
  } catch (error) {
    res.status(500).send({message: error.message});
  }
  
}

exports.getShopProductPidComments = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pid (String)
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

exports.postShopContactus = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (AnonymousRepresentation13)
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

