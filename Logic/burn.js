function resp(text) {
    var textArr = text.split(' ')
    var protein = firstNum(textArr)
    var carbs = firstNum(textArr)
    var fat = firstNum(textArr)

    function firstNum(arr) {
        for (i = 0; i < arr.length; i++) {
            var newInt = parseInt(arr[i])
            if (newInt) {
                arr[i] = 'num'
                return newInt
            }
        }
    }

    return (protein && carbs && fat) ? 'protein: ' + protein + ', carbs: ' + carbs + ', fat: ' + fat : 'You didnt provide enough info'


}

module.exports.resp = resp;