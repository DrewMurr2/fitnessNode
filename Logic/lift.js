function resp(text, user) {
    var textArr = text.split(' ')
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

    function firstWord(arr, after) {
        var afterExists = after ? false : true
        for (i = 0; i < arr.length; i++) {
            if (after && arr[i] == after) afterExists = true
            if (arr[i] != 'wrd' && afterExists) {
                var newWord = arr[i]
                arr[i] = 'wrd'
                return newWord
            }
        }
    }

    var options = {
        database: 'User_' + user._id,
        collection: 'timedata',
        Obj: {
            lift: firstWord(testArr, 'lift'),
            weight: firstNum(testArr, 'lift'),
            reps: firstNum(testArr, 'lift'),
        },
        insertedTime: new Date(),
        time: firstNum(testArr, 'time') || new Date(),
    }

    if (options.Obj.lift && options.Obj.weight && options.Obj.reps) {
        require('../Logic/Insert').insert(options)
        return 'Inserted: ' + JSON.stringify(options.Obj.food)
    } else return 'You didnt provide enough info'


}



module.exports.resp = resp;