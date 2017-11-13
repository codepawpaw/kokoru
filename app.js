var express = require("express");
var path = require("path");
var graphqlHTTP = require('express-graphql');
var mongoose = require('mongoose');
var Schema = require("./app/schema");

var app = express();

app.post('/graphql', graphqlHTTP({
  schema: Schema.schema(),
  graphiql: false
}));

app.get('/graphql', graphqlHTTP({
  schema: Schema.schema(),
  graphiql: true
}));

app.use(express.static(__dirname + '/public'));

app.use('/', (req, res) => { 
	res.sendFile(path.join(__dirname+'/public/index.html'));
});

// Connect mongo database
mongoose.connect('mongodb://user:user@ds013405.mlab.com:13405/kokoru',{ useMongoClient: true });

var server = app.listen(3000, () => {
	console.log("Listening at port ", server.address().port);
});