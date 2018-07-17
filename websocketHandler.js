var auth = require("./Auth");
var User = require("./models/User");
var Auction = require("./models/Auction");
var ObjectId = require("mongoose").Types.ObjectId;
var moment = require("moment");
var jwt = require('jsonwebtoken');
var config = require('./config');

module.exports = (io) => {

    var getRemainedTime = (auction) => {
        return moment().diff(auction.startTime, "seconds");
    }

    var isAuthenticated = (token, callback) => {

        if (token && token.indexOf('Bearer ') == 0){
            var tokenString = token.split(' ')[1];

            jwt.verify(tokenString, config.secret, (verificationError, decodedToken) => {
                if (verificationError == null && decodedToken && decodedToken.role){
                    return callback(decodedToken);
                }else{
                    // return null as error in callback
                    return callback(null);
                }
            });
        }else{
            return callback(null);
        }

    }




    var isFinished = async (auction) => {
        if (moment().diff(moment(auction.startTime), "seconds") > 0){
            return false;
        }else{
            return true;
        }
    }


    io.on("connection", function(client){
        client.on("join", function(room){
            io.join(room);
        });
    });

    
    io.on("offer", async function(data){
        const auction = await Auction.findOne(ObjectId(data.auctionId));
        if (isFinished(auction)){
            io.emit("finished", {message: "این حراجی به اتمام رسیده است"});
        }
        isAuthenticated(data.token, (decodedToken) => {
            if (getRemainedTime(auction) > 60){
                io.emit("wait", {message: "تا یک دقیقه پیش از شروع حراجی امکان ارسال پیشنهاد وجود نداد"});
            }else if (getRemainedTime(auction) > 0){
                acceptOfferAndUpdateView(data.token);
            }

        });
    });

    io.on("checkDone", function(data){
        if(await isFinished(data.auctionId)){
            // send finished data
        }
    });
}