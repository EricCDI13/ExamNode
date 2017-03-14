/**
 * Created by ericr on 14/03/2017.
 * Traitement de la route du module
 */

// Modules externes (dont Express)
var query = require('./app.js');
var app = require('express')();
var ejs = require('ejs');
var bodyParser = require('body-parser');

// Variables globales
var port = 22222;

// Middleware parser POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// create application/json parser
var jsonParser = bodyParser.json()

// Démarrage du serveur WEB
var server = app.listen(port, function () {
    console.log('Server démarrer sur port : ' + port);
});

// GET /hello-world : affiche le message "Hello World !", en utilisant res.send
//http://localhost:22222/hello-world
app.get('/hello-world', function (req, res) {
    res.send('Hello World !');
    console.log('GET /hello-world');
});

// set the view engine to ejs
app.set('view engine', 'ejs');

//GET /coucou/:name
//http://localhost:22222/coucou/:name
app.get('/coucou/:name', function (req, res) {
    var name = req.params.name;
    res.render('pages/Main', {name: name});
    console.log('GET /coucou/:name');
});

//GET /ping?message=text
//http://localhost:22222/ping?message=test
app.get('/ping', function (req, res) {
    var message = req.query.message;
    query.chargeMessage('ping', message);
    res.send('ok');
    console.log('/ping?message=' + message);
});

//POST /message
//http://localhost:22222/message
app.post('/message', jsonParser, function (req, res) {
    query.chargeMessage2('message', req.body.auteur, req.body.message);
    res.send('ok');
    console.log('POST /message' + message);
});

