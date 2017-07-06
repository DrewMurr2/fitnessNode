console.log('* [example1] sending test email');

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
    subject: 'attached test seb ',   // Override value set as default  
    files: []                // String or array of strings of filenames to attach 
}, function (err, res) {
    console.log('* [example1] send(): err:', err, '; res:', res);
});