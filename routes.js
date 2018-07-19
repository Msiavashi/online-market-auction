const routes = require('express').Router();

routes.get('/', (req, res, next) => {
    res.render('index.mustache');
});

routes.get('/user/{uid}/profile', (req, res, next) => {

});


routes.get('/login', (req, res, next) => {
});


routes.get('/register', (req, res, next) => {
});

routes.get('/rules', (req, res, next) => {
});

routes.get('/auction/{aid}', (req, res, next) => {
});


routes.get('/category/{cid}', (req, res, next) => {
});


routes.get('/product/{pid}', (req, res, next) => {
});


routes.get('/user/{uid}/cart', (req, res, next) => {
});


routes.get('/user/{uid}/cart/{cid}/confirm', (req, res, next) => {
});


routes.get('/user/{uid}/payment/{pid}/confirm', (req, res, next) => {
});

routes.get('/auctions/history', (req, res, next) => {
});



module.exports = routes;

