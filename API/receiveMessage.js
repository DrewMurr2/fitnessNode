//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongo = require('mongodb');
var app = express();
router.use(bodyParser.urlencoded({ extended: false }))
router.post('/', function (req, res) {
    var body = req.body.Body;
    var type
    body = body.toLowerCase()
    var typeArr = ['food', 'lift', 'burn']

    typeArr.forEach(function (t) {
        if (body.includes(t)) type ? Send('You can only have one directive.') : type = t
    })

    if (!type) Send('There is no directive')
    Send(require('../Logic/' + type).resp(body))


    function Send(s) {
        res.send(`
    <Response>
    <Message>
${s}
    </Message>
    </Response>
    `)
    }


    // var col = req.body.collection
    // var db = req.body.database
    // var arg1 = req.body.arg1
    // if (arg1._id) arg1._id = new mongo.ObjectID(arg1._id);
    // var arg2 = req.body.arg2
    // var url = 'mongodb://testmongofirst:FD2NYlme6rCORhPmrySk4DyMbHDVNm7Tyv3QY4WkzCyqGl2pxRjPadJG0Ql1MKZhR45ast6qxdGo0GbHNpKb8Q==@testmongofirst.documents.azure.com:10255/' + db + '?ssl=true&replicaSet=globaldb'// + db//'mongodb://localhost:27017/' + db;
    // console.log(col)
    // mongo.connect(url, function (err, db) {
    //     db.collection(col).find(arg1, arg2).toArray(function (err, results) { res.send(results) })
    // })
});
//API.find({database:'Raw', collection:'RawInstants_3_2017', arg1:{}})
module.exports = router;

///