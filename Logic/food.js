function resp(text, user) {
    var testArr = text.split(' ')
    function firstNum(arr, after) {
        var afterExists = after ? false : true
        for (i = 0; i < arr.length; i++) {
            if (after && arr[i] == after) afterExists = true
            var newInt = parseInt(arr[i])
            if (newInt && afterExists) {
                arr[i] = 'num'
                return newInt
            }
        }
    }

    var options = {
        database: 'User_' + user._id,
        collection: 'timedata',
        Obj: {
            food: true,
            protein: firstNum(testArr, 'food'),
            carbs: firstNum(testArr, 'food'),
            fat: firstNum(testArr, 'food'),
            insertedTime: new Date(),
            time: firstNum(testArr, 'time') || new Date(),
        }
    }

    if (options.Obj.protein && options.Obj.carbs && options.Obj.fat) {
        require('../Logic/Insert').insert(options)
        return 'Inserted: ' + JSON.stringify(options.Obj.food)
    } else return 'You didnt provide enough info'

}

module.exports.resp = resp;