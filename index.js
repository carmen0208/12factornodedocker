const path=require('path');
const express = require('express');
const proxy = require('express-http-proxy');
const morgan = require('morgan');

require('dotenv').config();
const baseImageUrl = process.env.BASE_IMAGE_URL;
const proxyBaseImageUrl = baseImageUrl
    ?  proxy( baseImageUrl, {
        proxyReqPathResolver: function(req) {
          const newPath = baseImageUrl + req.path;
          console.log(`Proxying requests from ${req.path} to ${newPath}`)
          return newPath;
        }
      })
    : express.static(path.join(__dirname, 'public/images'));
const app = express();
app.use(morgan('combined'));
console.log(path.join(__dirname, 'public/images'));
app.use('/images', proxyBaseImageUrl);

app.get('/', function(req, res) {
  res.send('<h1> can I has hug</h1><img src="images/avator.jpeg" />')
})

app.listen(8080, () =>  console.log('Web server running on port 8080'));
// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect(process.env.MONGO_URI, function(err, db) {
//   if(err) {
//     console.log('can not connect to mongoDB', err);
//   } else {
//     console.log('connected to mongoDB');
//   }
// });

