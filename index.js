const express        = require('express');
const morgan         = require('morgan');
const ejsLayout      = require('express-ejs-layouts');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const port           = process.env.PORT || 3000;
const mongoose       = require('mongoose');
const router         = require('./config/routes');
const app            = express();

// setting up Mongo
const databaseUrl    = 'mongodb://localhost/shows';
mongoose.connect(databaseUrl, () => {
  return console.log(`Connected to database: ${databaseUrl}`);
});

// set up views
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

//middleware + static
app.use(morgan('dev'));
app.use(ejsLayout);
app.use(express.static(`${__dirname}/bower_components`));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded( {extended: true }));
app.use(methodOverride(req => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use('/', router);

// init app
app.listen(port, () => console.log(`Express running on port ${port})`));
