var express = require('express')
var app = express()
var bodyParser = require('body-parser');
// const cors = require('express-cors');
var chai = require('chai')
var mongoose=require('mongoose');
var fs = require('fs')
let Mocha = require('mocha')

const path = require('path');
const MongoClient = require('mongodb').MongoClient



// var { assert } = require('../app/node_modules/chai');
//
// describe('IronFE', function() {
//   it('vowel check should return true ALEX', function() {
//     assert.equal(true, true)
//   })
//    it('vowel check should return true ALEX', function() {
//     assert.equal(false, true)
//   })
// })

//assert for localhost:
//var { assert } = require('../chai');


//assert for server:
//var { assert } = require('../app/node_modules/chai');

// if(process.env.NODE_ENV === ){
//
// }

var temp_dir;

if(app.settings.env === "development"){
  temp_dir = path.join(process.cwd(), 'server/tmp/test.js');
} else {
  temp_dir = '/tmp/temp.js';
  // temp_dir = path.join(process.cwd(), 'tmp/temp.js');
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

function runMochaTests() {
    Object.keys( require.cache ).forEach( function( file ) {
        delete require.cache[ file ];
    } );
    var mocha = new Mocha();
    // mocha.addFile('/tmp/test.js');
    mocha.addFile(temp_dir);
    return mocha.run()
}
const generateCodeFile = (mainCode, testCode) => {
  console.log(mainCode);
  return mainCode + ' ; ' + addChaiToTestCode(testCode)
}
const addChaiToTestCode = (testCode) => {

  const localChai = `var { assert } = require('../chai');`
  const serverChai = `var { assert } = require('../app/node_modules/chai');`

  if(app.settings.env === "development"){
    return localChai + testCode
  } else {
    return serverChai + testCode
  }
}
app.post('/api/newtest', (request, response) => {
  var testArray = []
  fs.open(temp_dir, 'w', function(){

    const code = generateCodeFile(request.body.main, request.body.test);
    return fs.writeFile(temp_dir, code, (err) => {
        const runner = runMochaTests();
        runner.on('pass', (test)=>{
          let testDetails = {
            title: test.title,
            body: test.body,
            state: test.state,
            error: test.err
          }
          testArray.push(testDetails)
        })
        runner.on('fail', (test)=>{
          let testDetails = {
            title: test.title,
            body: test.body,
            state: test.state,
            error: test.err
          }
          testArray.push(testDetails)
        })
        runner.on('end', (test)=>{
          response.status(200).send(testArray)
        })
      });
    });
});

app.get('/users', (request, response) => {
  User.find(function(err, users) {
  if (err) {
    response.send(err)
  }
  response.send({ users: users });
  })
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

var port_number = process.env.PORT || 3001

app.listen(port_number, function () {
  console.log('RrrarrrrRrrrr server alive on port 3001')
})


// // Get all users
// app.get('/users', (request, response) => {
//   User.find(function(err, users) {
//   if (err) {
//     response.send(err)
//   }
//   response.send({ users: users });
//   })
// });
//
// app.get('/users/:email', function(req, res) {
//   User.findOne({ email: req.params.email}, function(err, user) {
//     if (err) {
//       res.status(404).send(err)
//     }
//     res.json(user)
//   })
// })
//
// // Get all cities
// app.get('/cities', (request, response) => {
//   City.find(function(err, cities) {
//   if (err) {
//     response.send(err)
//   }
//   response.send({ cities: cities });
//   })
// });
//
// app.get('/cities/:cityID', function(req, res) {
//   User.findOne({ _id: req.params.cityID}, function(err, user) {
//     if (err) {
//       res.status(404).send(err)
//     }
//     res.json(user)
//   })
// })
//
// app.post('/users', function(req, res) {
//   var user = new User(req.body);
//
//   user.save(function(err) {
//     if (err) {
//       res.send(err)
//     }
//     User.find(function(err, users) {
//       res.send(users)
//     })
//   })
// })
//
// app.put('/users/:email', function(req,res){
//   User.findOne({ email: req.params.email}, function(err, user) {
//     if (err) {
//      res.send(err)
//     }
//     // Update the params sent
//     for (prop in req.body) {
//       user[prop] = req.body[prop]
//     }
//     // Save the user
//     user.save(function(err) {
//       if (err) {
//         res.send(err)
//       }
//       res.json({ message: 'User Profile updated!' });
//     })
//   })
// })
//
// app.post('/cities', function(req, res) {
//   var city = new City(req.body);
//   city.save(function(err) {
//     if (err) {
//       res.send(err)
//     }
//     City.find(function(err, cities) {
//       res.send(city._id)
//     })
//   })
// })
