const routes = require('express').Router();

routes.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/tests/socket.html");
});





module.exports = routes;

