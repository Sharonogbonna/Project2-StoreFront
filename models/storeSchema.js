const mongoose = require('mongoose');
const storeSchema = new mongoose.Schema({
    productName:{ type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }, 
    description: { type: String, required: true }
});
const Store = mongoose.model('Store', storeSchema);
module.exports = Store