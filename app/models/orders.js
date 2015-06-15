var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ordersSchema = new Schema(
{
    cust_id: Schema.Types.ObjectId,
    product: String,
    total: Number
},
{
    collection: 'orders'
}
    );

var Orders = mongoose.model('orders', ordersSchema);
module.exports = Orders;
