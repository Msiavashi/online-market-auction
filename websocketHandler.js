var auth = require("./Auth");
var User = require("./models/User");
var Auction = require("./models/Auction");
var ObjectId = require("mongoose").Types.ObjectId;
var moment = require("moment");
var jwt = require('jsonwebtoken');
var config = require('./config');
var AuctionRegister = require("./models/AuctionRegister");
var Offer = require("./models/Offer");

module.exports = (io) => {

    var getRemainedTime = (auction) => {
        return moment().diff(auction.startTime, "seconds");
    }

    var isAuthorized = async (auction, token, callback) => {

        if (token && token.indexOf('Bearer ') == 0){
            var tokenString = token.split(' ')[1];

            jwt.verify(tokenString, config.secret, async (verificationError, decodedToken) => {
                if (verificationError == null && decodedToken){
                    const user = await User.findOne({username: decodedToken.username});
                    const auction = AuctionRegister.find({auction: auction._id}).populate({
                        path: "auctionRegister",
                        match: {
                            user: user._id
                        }
                    });
                    
                    // if registerd in aution
                    if (auction != []){
                        return callback(decodedToken);
                    }
                    else{
                        return callback(null);
                    }

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

    var acceptOfferAndUpdateView = async (decodedToken, auction) => {
        // implement logic to accept or reject offer
        let lastOffer = await Offer.find({auction: auction._id}).sort({created_at: 'asc'}).populate("User").limit(1);
        if (lastOffer.user.username === decodedToken.sub){
            io.emit("lastOfferError", "شما نمیتوانید روی پیشنهاد خود پیشنهادی ارسال کنید")
        }else{
            let remainedTime = getRemainedTime(auction);
            let user = await User.findOne({username: decodedToken.username})
            let newOffer = new Offer({
                auction: auction._id,
                win: true,
                totalPrice: lastOffer == [] ? auction.basePrice + (10000 * auction.ratio) : lastOffer.totalPrice + (10000 * auction.ratio),
                user: user._id
            });
            lastOffer.win = false;
            let updatedLastOffer = await lastOffer.save();
            let savedOffer = await newOffer.save();

            let newTime = null;
            if (remainedTime <= 10){
                newTime = 10;       // reset the timer to 10 seconds
            }

            let newData = {
                lastOffer: savedOffer,
                newTime: newTime,
                previousOffers: await Offer.find({auction: auction._id}).sort({created_at: 'asc'})
            }

            io.socket.to(auction._id).emit("update", newData);

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
        isAuthorized(auction, data.token, (decodedToken) => {
            if (!decodedToken){
                io.emit("forbidden", "شما اجازه ارسال پیشنهاد را ندارید");
            }
            if (getRemainedTime(auction) > 60){
                io.emit("notStarted", {message: "تا یک دقیقه پیش از شروع حراجی امکان ارسال پیشنهاد وجود نداد"});
            }else if (getRemainedTime(auction) > 0){
                acceptOfferAndUpdateView(decodedToken, data);
            }

        });
    });

    io.on("checkDone", function(data){
        if(isFinished(data.auctionId)){
            // send finished data
            // set the winner
            // send the item to winner's cart
            // .
            // .
            // .
        }
    });
}