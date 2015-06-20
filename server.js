/*jslint nomen: true, node: true, plusplus: true */
/*global angular */

var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
//    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'), //overrides parameters in get and delete requests.
    app = express();

var credentials = require('./credentials.js'),
    Customers = require('./app/models/minerals.js'),
    Orders = require('./app/models/orders.js');

app.set('port', process.env.PORT || 8080);

// Connect to MongoDB
mongoose.connect(credentials.mongo.dbURI.local, credentials.mongo.dbOptions.local);

// Middleware:

// Parse application/JSON
app.use(bodyParser.json());

// Parse application/VND.API+JSON as JSON
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Parse application/X-WWW-FORM-URL ENCODED
app.use(bodyParser.urlencoded({ extended: true }));

// Override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));

//Parse Cookies with cookie parser and cookie secret
//app.use(cookieParser(credentials.cookieSecret));

app.use(express.static(__dirname, '/'));


// Routes
app.get('/minerals/:id', function (req, res) {
    'use strict';
    console.log("Route handler for /minerals/" + req.params.id);
    Minerals.findById(req.params.id, function (err, mineral) {
        res.json(mineral);
    });
});



app.get('/minerals', function (req, res) {
    'use strict';
    console.log("Route handler for /minerals");
    Minerals.find({}, function(err, minerals) {
        res.json(minerals);
    });
});



app.get('/orders/:minerId', function (req, res) {
    'use strict';
    console.log("Route handler for /orders/" + req.params.minerId);
    Orders.find( { miner_id : req.params.minerId }, function (err, orders) {
        res.json(orders);
    });
});



app.delete('/minerals/:id', function (req, res) {
    'use strict';
    Minerals.findById(req.params.id).remove(function(err, data) {
        res.json(data);
    });
});



app.listen(8080);

console.log('Express listening on port 8080; ctrl-c to cancel.');
