//Requiring Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//PORT
var PORT = process.env.PORT || 8080;

//Setting Static Folder to use other local resources
app.use(express.static('app/public'));

//Calling bodyParser to handle incomming data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Requiring routes:
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//Start Server
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
