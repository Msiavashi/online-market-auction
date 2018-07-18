'use strict';
var PaymentMethod = require("../models/PaymentMethod") ;
var ShipmentMethod = require("../models/ShipmentMethod");
const MellatCheckout = require('mellat-checkout');
const Mellat = require('mellat-payment');
var soap = require('soap');
const Payir = require('payir');


exports.getPaymentMethods = async function(args, res, next) {
  /**
   * parameters expected in the args:
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

  try {
    const methods = await PaymentMethod.find({});
    console.log(methods);
    res.status(200).send(methods);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
  
}

exports.getShipmentMethods = async function(args, res, next) {
  /**
   * parameters expected in the args:
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

  try {
    const methods = await ShipmentMethod.find({});
    console.log(methods);
    res.status(200).send(methods);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
  
}

exports.postPaymentGatewayMellatCallback = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (AnonymousRepresentation48)
  **/
  // no response value expected for this operation
  res.end();
}

exports.postPaymentPidConfirm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pid (String)
  * body (AnonymousRepresentation45)
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

