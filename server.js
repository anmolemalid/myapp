var express = require('express');
var app = express();
var fs = require("fs");
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const users = [
   {
     "name" : "mahesh",
     "password" : "password1",
     "profession" : "teacher",
     "id": 1
  },
   {
     "name" : "mahesh",
     "password" : "password1",
     "profession" : "teacher",
     "id": 10
  },
  {
     "name" : "suresh",
     "password" : "password2",
     "profession" : "librarian",
     "id": 2
  },
   {
     "name" : "ramesh",
     "password" : "password3",
     "profession" : "clerk",
     "id": 3
  }
];

app.get('/listUsers', function (req, res) {
   res.json( users );
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
