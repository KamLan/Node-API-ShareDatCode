var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./models/maSuperAPIModels'), // appel du modèle
  bodyParser = require('body-parser');
  

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.17.0.2:27017/tododb'); // adresse serveur mongo


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/maSuperAPIRoutes'); // appel des routes
routes(app); 


app.listen(port);


console.log('Ma Super RESTful API server started on: ' + port);
