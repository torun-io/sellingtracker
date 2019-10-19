const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname + '/client')));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(8000, () => {
    console.log('listening on port 8000');
});
