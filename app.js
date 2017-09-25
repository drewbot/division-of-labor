const express = require('express');
const handlebars = require('express-handlebars');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const homeController = require('./controllers/home.js');

const app = express();

const publicPath = path.join(__dirname, 'public');

app.use(sassMiddleware({
    /* Options */
    src: publicPath + '/sass/stylesheets',
    dest: publicPath + '/css/stylesheets',
    error: (e) => {
      console.console.log('node-sass error', e);
    },
    debug: true,
    indentedSyntax : false,
    prefix: '/css/stylesheets',
    outputStyle: 'compressed'
}));

app.use(express.static( publicPath ));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// setup body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

router.get('/', homeController.home);
router.get('/training', homeController.training);
router.get('/recruiting', homeController.recruiting);
router.get('/software', homeController.software);

app.use('/', router);

app.listen(port);
