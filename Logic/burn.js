function resp(text) {
    var textArr = text.split(' ')
    var calories = firstNum(textArr)

    function firstNum(arr) {
        for (i = 0; i < arr.length; i++) {
            var newInt = parseInt(arr[i])
            if (newInt) {
                arr[i] = 'num'
                return newInt
            }
        }
    }

    return (calories) ? 'calories: ' + calories : 'You didnt provide enough info'


}

module.exports.resp = resp;