const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {

    index: async (req, res) => {
        let products;
        let soldProducts;
        await Product.find({ sold: { $ne: true }}, (err, data) => {
            if (err) {
                console.log(err.message);
            }
            products = data;
            // res.render('index', { products: products });
        });
        await Product.find({ sold: true }, (err, data) => {
            if (err) {
                console.log(err.message);
            }
            soldProducts = data;
        });
        res.render('index', { products: products, soldProducts: soldProducts });
    },
    create: (req, res) => {
        const item = new Product({
            name: req.name,
            title: req.title,
            description: req.description,
            originalPrice: req.price,
            currentPrice: req.price,
            listDate: Date.now(),
            listedPlatforms: {
                offerUp: req.offerUp || false,
                fiveMiles: req.fiveMiles || false,
                nextDoor: req.nextDoor || false,
                craigslist: req.craigslist || false,
                ebay: req.craigslist || false
            }
        });
        item.save((err) => {
            if (err) {
                console.log(err.message);
            }
            res.redirect('/');
        })
    },
    show: (req, res) => {
        Product.findOne({ _id: req.params.id }, (err, product) => {
            if (err) {
                console.log(err.message);
            }
            res.render('products/edit', product);
        });
    },
    update: (req, res) => {
        if (req.body.sold) {
            req.body.soldDate = Date.now();
        };
        Product.updateOne({ _id: req.params.id }, req.body, (err) => {
            if (err) {
                console.log(err.message);
            }
            res.redirect('/');
        })
    }

}
