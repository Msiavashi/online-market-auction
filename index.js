'use strict';
var routes = require('./routes');
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
var http = require('http');
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var fs = require('fs');
var mongoose = require('mongoose');
var morgan = require("morgan");
var serverPort = 8080;
var auth = require("./Auth");
var server = http.createServer(app);
var io = require('socket.io')(server);
var websocketHandler = require('./websocketHandler');
var mustacheExpress = require('mustache-express');
// setup websocket
websocketHandler(io);


// setup static folder
app.use(express.static('public/static'));

// setup public images directory
app.use(express.static('public/static/images'));

// setup mustache template engine
app.engine('mustache', mustacheExpress());
app.set('view_engine', 'mustache');
app.set('views', __dirname + '/public/templates');

// setup routes
app.use('/', routes);

// mongoose connection
mongoose.connect('mongodb://localhost:27017/bistbid', {useNewUrlParser: true});

// user morgan to log requests to console
app.use(morgan('dev'));

//configuring liana forest admin dashboard
app.use(require('forest-express-mongoose').init({
  modelsDir: __dirname + '/models', // Your models directory.
  envSecret: process.env.FOREST_ENV_SECRET,
  authSecret: process.env.FOREST_AUTH_SECRET,
  mongoose: mongoose // The mongoose database connection.
}));

// swaggerRouter configuration
var options = {
  swaggerUi: '/swagger.json',
  controllers: './controllers',
  useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync('./api/swagger.yaml', 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());


  app.use(middleware.swaggerSecurity({
    Bearer: auth.verifyToken
  }));

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  server.listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });
});

