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
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


const generateCodeFile = (mainCode, testCode) => {
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

function runMochaTests() {
    Object.keys( require.cache ).forEach( function( file ) {
        delete require.cache[ file ];
    } );
    var mocha = new Mocha();
    mocha.addFile(temp_dir);
    mocha.allowUncaught()

    try {
      return mocha.run()
    } catch (e) {
      return e;
    }
}

app.post('/api/newtest', (request, response) => {
  var testArray = []
  fs.open(temp_dir, 'w', function(){

    const code = generateCodeFile(request.body.main, request.body.test);
    return fs.writeFile(temp_dir, code, (err) => {
        const runner = runMochaTests();
        if(!(runner instanceof Error)) {
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
        } else {
          response.status(200).send({error: runner.message})
        }
      });
    });
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
