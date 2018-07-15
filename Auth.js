var config = require('./config');
var jwt = require('jsonwebtoken');

exports.verifyToken = (req, authOrSecDef, token, callback) => {
    console.log("Bearer authentication");
    function sendError(){
        return req.res.status(403).json({message: "Error: Access Denied"});
    }

    // validate the Bearer header
    // 'Bearer TokenString'
    if (token && token.indexOf('Bearer ') == 0){

        var tokenString = token.split(' ')[1];

        jwt.verify(tokenString, config.secret, (verificationError, decodedToken) => {
            
            if (verificationError == null && decodedToken && decodedToken.role){
                req.auth = decodedToken;
                return callback(null);  //no error
            }else{
                // return error in callback
                return callback(sendError());
            }
        });


    }else{
        return callback(sendError());
    }


}


exports.issueToken = (username, role) => {
    var token = jwt.sign({
        sub: username,
        role: role
    }, config.secret);
}