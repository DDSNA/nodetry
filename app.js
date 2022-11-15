var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

//added code 
var fs = require('fs');


var indexRouter = require('./routes');
var usersRouter = require('./routes/users');

// added code
var app = express();

const PORT = process.env.PORT || 5000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


	// we'll add code here soon
/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */

 var MongoClient = require('mongodb').MongoClient;

 // Connect to the db
 MongoClient.connect("mongodb+srv://weblogin:pVAS41EoXr0J7MRH@webdb.wocgjn8.mongodb.net/test?retryWrites=true&w=majority", function (err, db) {
    
      if(err) throw err;

    });
      //Write databse Insert/Update/Query code here..
                 
//async function main() {
//   const uri = "mongodb+srv://danadmin:1l4gNTYBgOz6vWsr@webdb.wocgjn8.mongodb.net/test?retryWrites=true&w=majority";
//   const client = new MongoClient(uri);
//   try {
//     await client.connect();

//     await listDatabases(client);
 
//   } catch (e) {
//     console.error(e);
//   }
//   finally {
//     await client.close();
//   } 

// }//  

// This route will handle all the requests that are 
// not handled by any other route handler. In 
// this hanlder we will redirect the user to 
// an error page with NOT FOUND message and status
// code as 404 (HTTP status code for NOT found)
app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});
  
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});


//added code for dbconn

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/contactmeupload', function (req, res) {
  dbConn.then(function(db) {
      delete req.body._id; // for safety reasons
      db.collection('contactmedata').insertOne(req.body);
  });    
  res.send('Data received:\n' + JSON.stringify(req.body));
});


module.exports = app;

