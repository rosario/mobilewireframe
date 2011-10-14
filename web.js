var express = require('express');
var app = express.createServer(express.logger());

app.set('view engine', 'jade');
app.use('/css', express.static(__dirname + '/css')); 
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images')); 
app.use('/boilerplate', express.static(__dirname + '/boilerplate'));

// app.use(express.favicon(__dirname + '/images/favicon.ico', { maxAge: 2592000000 }));


app.get('/', function(req, res){ 
  res.render('index');
});


app.get('/list', function(req, res){ 
 res.render('list');
});

app.get('/page', function(req, res){ 
 res.render('page');
});

app.get('/settings', function(req, res){ 
 res.render('settings');
});



var port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log("Listening on " + port);
});
