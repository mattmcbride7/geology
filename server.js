/*jslint nomen: true, node: true, plusplus: true */
/*global angular */

var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
//    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'), //overrides parameters in get and delete requests.
    app = express();

var credentials = require('./credentials.js'),
    Customers = require('./app/models/customers.js'),
    Orders = require('./app/models/orders.js');

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
app.get('/customers/:id', function (req, res) {
    'use strict';
    console.log("Route handler for /customers/" + req.params.id);
    Customers.findById(req.params.id, function (err, customer) {
        res.json(customer);
    });
});

app.get('/customers', function (req, res) {
    'use strict';
    console.log("Route handler for /customers");
    Customers.find({}, function(err, customers) {
        res.json(customers);
    });
});

app.get('/orders/:custId', function (req, res) {
    'use strict';
    console.log("Route handler for /orders/" + req.params.custId);
    Orders.find( { cust_id : req.params.custId }, function (err, orders) {
        res.json(orders);
    });
});
/*
    var orders = [],
        i = 0,
        j = 0,
        len = 0,
        ordersLen = 0;
    for (i = 0, len = customers.length; i < len; i++) {
        if (customers[i].orders) {
            for (j = 0, ordersLen = customers[i].orders.length; j < ordersLen; j++) {
                orders.push(customers[i].orders[j]);
            }
        }
    }
    res.json(orders);
});
*/

app.delete('/customers/:id', function (req, res) {
    'use strict';
    Customers.findById(req.params.id).remove(function(err, data) {
        res.json(data);
    });
});
/*
    var customerId = parseInt(req.params.id, 10),
        data = { status: true },
        i = 0,
        len = 0;
    for (i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === customerId) {
            customers.splice(i, 1);
            data = { status: true };
            break;
        }
    }
    res.json(data);
});
*/

app.listen(3770);

console.log('Express listening on port 3770; ctrl-c to cancel.');
