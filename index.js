require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.MONGO_URI, function(err, db) {
  if(err) {
    console.log('can not connect to mongoDB', err);
  } else {
    console.log('connected to mongoDB');
  }
});

