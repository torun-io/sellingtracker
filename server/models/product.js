const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    thumbnail: String,
    picture: String,
    name: String,
    title: String,
    originalPrice: Number,
    currentPrice: Number,
    listDate: Date,
    listedPlatforms: JSON,
    description: String,
    sold: {
        type: Boolean,
        default: false
    },
    soldDate: Date,
    soldPrice: Number,
    soldPlatform: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date
});

mongoose.model('Product', ProductSchema);
