
function find(options, callback) {
    var url = 'mongodb://mongofitness:VlpBZsuR2l35eM62uC71ZJnWMlGw8f7Vd6TdVGvOgrK07hFaw4wGW68p0DG7F1kJ8hrRK3Fmu8tYgjaWX9PGhg==@mongofitness.documents.azure.com:10255/' + options.database + '?ssl=true&replicaSet=globaldb'
    mongo.connect(url, function (err, db) {
        db.collection(options.collection).find(options.arg1, options.arg2).toArray(function (err, results) { callback({ err: err, results: results }) })
    })
}
module.exports.find = find;