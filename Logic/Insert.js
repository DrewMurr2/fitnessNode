
function insert(options) {
    var mongo = require('mongodb');
    var url = 'mongodb://mongofitness:VlpBZsuR2l35eM62uC71ZJnWMlGw8f7Vd6TdVGvOgrK07hFaw4wGW68p0DG7F1kJ8hrRK3Fmu8tYgjaWX9PGhg==@mongofitness.documents.azure.com:10255/' + options.database + '?ssl=true&replicaSet=globaldb'
    mongo.connect(url, function (err, db) {
        db.collection(options.collection).insertOne(options.Obj, function (err, results) {
            db.close();
        })
    })
}

module.exports.insert = insert;





