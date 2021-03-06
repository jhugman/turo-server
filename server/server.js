var app = require('express')();
var bodyParser = require('body-parser');
var repository = require('./repository');
var routes = require('./routes');
var multer = require('multer');

module.exports = function(port){
    // for parsing application/json
    app.use(bodyParser.json()); 

    // for parsing application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    // for parsing multipart/form-data
    app.use(multer());

    // Listen for requests
    app.listen(port);

    // Set up routes
    routes(app);

    // Return server object
    return app;
};
