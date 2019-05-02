const express = require('express');
const router = require('./router');
const log = require('./lib/log');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(log.logInit);

// Routers
router.routerFactory(app);

app.listen(8000, ()=> {
    console.log('Server is running at: 8000');
});