'use strict';
var auth = require("../Auth");
exports.postAdmin = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/


  var role = args.swagger.params.role.value;
  var username = args.body.username;
  var password = args.body.password;
  if (username == "mohammad" && password == "123"){
    return  res.json({token: auth.issueToken(username, role)});
  }else{
    return  res.json({error: "something is wrong"});
  }


  //   var examples = {};
  // examples['application/json'] = { };
  // if(Object.keys(examples).length > 0) {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // }
  // else {
  //   res.end();
  // }
  
}

