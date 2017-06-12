function resp(text, database) {
    var textArr = text.split(' ')
    var timeO = firstNum(testArr, 'time') || new Date()
    var calories = firstNum(textArr)

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

    if (calories) {
        require('../Logic/Insert').insert({ Database: database, Collection: 'Burn', Obj: { time: timeO, burn: calories } })
        return 'calories: ' + calories
    } else return 'You didnt provide enough info'

}

module.exports.resp = resp;