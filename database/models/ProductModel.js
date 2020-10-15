const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_id: Number,
    results: [{
        type: Schema.Types.ObjectId,
        ref: "Questions"
    }]
});

const Products = mongoose.model("Products", productSchema);

module.exports = {
    Products
}