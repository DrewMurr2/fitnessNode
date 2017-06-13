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

    var options = {
        database: 'User_' + user._id,
        collection: 'timedata',
        Obj: {
            burn: firstNum(testArr, 'burn'),
            insertedTime: new Date(),
            time: firstNum(testArr, 'time') || new Date(),
        }
    }

    if (options.Obj.burn) {
        require('../Logic/Insert').insert(options)
        return 'calories: ' + options.Obj.burn
    } else return 'You didnt provide enough info'

}

module.exports.resp = resp;