var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mineralsSchema = new Schema(
{
    name: String,
    city: String,
    orderTotal: String,
    joined: String
},
{
    collection: 'minerals'
}
    );

var Minerals = mongoose.model('minerals', mineralsSchema);
module.exports = Minerals;
