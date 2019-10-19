const products = require('../controllers/products.js');

module.exports = function(app){

    app.get('/', (req, res) => products.index(req, res));

    app.get('/products/new', (req,res) => res.render('products/new'));

    app.get('/products/:id', (req, res) => products.show(req, res));

    app.post('/products/:id', (req, res) => products.update(req, res));

    app.post('/products', (req, res) => products.create(req.body, res));

}
