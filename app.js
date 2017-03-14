/**
 * Created by ericr on 14/03/2017.
 */
var mong = require('mongodb').MongoClient;

var database = "mongodb://localhost:27017/ExamNode";

function chargeMessage(collection, message) {
    mong.connect(database, function (err, db) {
        if (db == null) console.log("Problème ouverture base de données");
        else {
            var now = new Date();
            var date = now.getFullYear().toString() + '-';
            var month = now.getMonth() + 1;
            date += month.toString() + '-';
            date += now.getDate().toString();
            db.collection(collection).insert({date: date, message: message});
            console.log("chargeMessage ping" + message);
        }
    });
}

function chargeMessage2(collection, auteur, message) {
    mong.connect(database, function (err, db) {
        if (db == null) console.log("Problème ouverture base de données");
        else {
            db.collection(collection).insert({auteur: auteur, message: message});
            console.log("chargeMessage ping" + message);
        }
    });
}

// function videbase() {
//     mong.connect(database, function (err, db) {
//         if (db == null) console.log("Problème ouverture base de données");
//         else {
//             db.collection('ExamNode').drop(function (err, res) {
//                 console.log("Drop result : " + res);
//                 console.log("videbase mongoDB terminé");
//             });
//         }
//     });
// }
//
// videbase();

exports.chargeMessage = chargeMessage;
