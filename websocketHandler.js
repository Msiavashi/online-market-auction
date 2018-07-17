module.exports = (io) => {
    var rooms = [];
    io.on("connection", function(client){
        client.on("join", function(room){
            console.log(room);
            io.join(room);
        });
    });

    io.on("offer", function(data){
        
    });
}