BSJS.init()
var navbar = new BSJS.nav.bar({
    title: 'Monkey CRM'
    , addTo: BSJS.tags.main
    , left: [new BSJS.nav.dropDownGroup({
        var: 'Reports'
        , title: 'Reports'
        , body: [new BSJS.nav.dropDownItem({
            body: 'Overview of period'
            , onClick: function () {
                alert('Working')
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Detail of each lead'
            , onClick: function () {
                alert('Second Working')
            }
        })]
    }), new BSJS.nav.dropDownGroup({
        var: 'View'
        , title: '<<View.tit>>'
        , body: [new BSJS.nav.dropDownItem({
            body: 'All'
            , onClick: function () {
                API.getObject("/API/getNamesOfWits/", {}, function (ob) { console.log(ob); alert('got it') })
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Closest to finish'
            , onClick: function () {
                API.postToWits(obb)
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Next follow up'
            , onClick: function () {
                alert('Second Working')
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Installs'
            , onClick: function () {
                alert('Second Working')
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Lost'
            , onClick: function () {
                alert('Second Working')
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Arc First'
            , onClick: function () {
                alert('Second Working')
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Sold'
            , onClick: function () {
                alert('Second Working')
            }
        })]
    })]
})



var parsePackage = new operation({
    operator: 'contains', right: 'arm',
    then: [new operation({ operator: 'alert', left: 'T' })
        , new operation({
            operator: 'contains', right: 'leg',
            then: [new operation({ operator: 'alert', left: 'Leg' })],
            else: [new operation({ operator: 'alert', left: 'No Leg' })]
        })],
    else: [new operation({ operator: 'alert', left: 'No Arm' }),
    new operation({
        operator: 'contains', right: 'leg',
        then: [new operation({ operator: 'alert', left: 'Leg' })],
        else: [new operation({ operator: 'alert', left: 'No Leg' })]
    })]
})

function operation(options) {

    this.operator = options.operator
    this.then = options.then || []
    this.else = options.else || []
    this.left = options.left
    this.right = options.right
    var thisOperation = this
    this.exec = function (optns) {
        var left = thisOperation.left || (optns ? optns.left : Mainstring)
        var right = thisOperation.right || (optns ? optns.right : undefined)
        var operator = thisOperation.operator
        return thisOperation[operator](left, right)

        // switch (operator) {
        //     //********   BOOLEANS    *************

        //     case 'contains':
        //         return thenElse(left.includes(right))

        //     case 'equals':
        //         return thenElse(left == right)


        //     //********   FUNCTIONS    *************

        //     case 'split':
        //         return left.split(right)
        //     case 'of':
        //         return left[right]

        //     //********   ACTIONS    *************
        //     case 'setEquals':
        //         left = right
        //     case 'alert':
        //         return alert(left)

        //     case 'post':
        //         post(left, right)

        // }

        // function post(lt, rt) {
        //     alert(lt + rt)
        // }



    }
    this.thenElse = function (result) {
        if (result) thisOperation.then.forEach(function (act) { act.exec() })
        else thisOperation.else.forEach(function (act) { act.exec() })
    }
    this.alert = function (left, right) {
        alert(left + ":" + right)
    }
    this.contains = function (left, right) {
        thisOperation.thenElse(left.includes(right))
    }

}

var objW = new BSJS.objectWorker({
    obj: parsePackage
    , addTo: BSJS.main
})




var objW = new MyObjs.operationWorker({
    obj: parsePackage
    , addTo: BSJS.main
})
