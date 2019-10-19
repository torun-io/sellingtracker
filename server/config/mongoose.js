const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sellingTracker', { useNewUrlParser: true });

const Product = require('../models/product.js');