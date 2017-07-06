//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
router.use(bodyParser.urlencoded({ extended: false }))
router.post('/', function (req, res) {

    var message = req.body.Body
    var from = req.body.From


    // Require the module and set default options 
    // You may use almost any option available in nodemailer,  
    // but if you need fine tuning I'd recommend to consider using nodemailer directly. 
    var send = require('gmail-send')({
        user: 's3ndt3xt@gmail.com',               // Your GMail account used to send emails 
        pass: 'TESTSENDTEXT',             // Application-specific password 
        to: 'DREWMURR2@gmail.com',               // Send back to yourself;  
        // you also may set array of recipients:  
        // [ 'user1@gmail.com', 'user2@gmail.com' ] 
        // from:   '"User" <user@gmail.com>'  // from: by default equals to user 
        // replyTo:'user@gmail.com'           // replyTo: by default undefined 
        subject: 'You received a text from 5125765535',
        text: 'test text'
        // html:    '<b>html text text</b>' 
    });

    //var file = './demo-attachment.txt';        // File to attach 

    // Override any default option and send email 
    send({
        subject: 'You received a text message from: ' + from,   // Override value set as default  
        files: [],
        text: message                // String or array of strings of filenames to attach
    }, function (err, res) {
        console.log('* [example1] send(): err:', err, '; res:', res);
    });





});

module.exports = router;

