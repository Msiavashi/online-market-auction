
module.exports = (io) => {

    io.on("connection", function(client){
        console.log("client connected");

        client.on("join", function(data){
            console.log(data);
        });
    });

}