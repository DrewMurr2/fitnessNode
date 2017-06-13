function operation(options) {
    options = options || {}
    this.left = options.left
    this.right = options.right
    this.type = options.type || 'operation'
    this.operator = options.operator
    var thisOperation = this
    this.val = function () {
        switch (thisOperation.operator) {
            case 'gt':
                return (thisOperation.left.val() > thisOperation.right.val())
            case 'lt':
                return (thisOperation.left.val() < thisOperation.right.val())
            case 'eq':
                return (thisOperation.left.val() == thisOperation.right.val())
            case 'gtoe':
                return (thisOperation.left.val() >= thisOperation.right.val())
            case 'ltoe':
                return (thisOperation.left.val() <= thisOperation.right.val())
            case 'mod':
                return (thisOperation.left.val() % thisOperation.right.val())
            case 'plus':
                return (thisOperation.left.val() + thisOperation.right.val())
            case 'minus':
                return (thisOperation.left.val() - thisOperation.right.val())
            case 'multiply':
                return (thisOperation.left.val() * thisOperation.right.val())
            case 'divide':
                return (thisOperation.left.val() / thisOperation.right.val())
            case 'toThePowerOf':
                return (thisOperation.left.val() ^ thisOperation.right.val())
            case 'primitive':
                return thisOperation.left
            case 'dataColumn':
                return instant[left]
        }
    }
}

function dataColumn() {

    this.val = function () {

    }
}

function primitive(val) {
    return new operation({ left: val, operator: 'primitive' })
}
operation.prototype.gt = function (opration) {
    return new operation({ left: this, operator: 'gt', right: opration })
}

operation.prototype.lt = function (opration) {
    return new operation({ left: this, operator: 'lt', right: opration })
}

operation.prototype.eq = function (opration) {
    return new operation({ left: this, operator: 'eq', right: opration })
}

operation.prototype.gtoe = function (opration) {
    return new operation({ left: this, operator: 'gtoe', right: opration })
}

operation.prototype.ltoe = function (opration) {
    return new operation({ left: this, operator: 'ltoe', right: opration })
}

operation.prototype.mod = function (opration) {
    return new operation({ left: this, operator: 'mod', right: opration })
}

operation.prototype.plus = function (opration) {
    return new operation({ left: this, operator: 'plus', right: opration })
}

operation.prototype.minus = function (opration) {
    return new operation({ left: this, operator: 'minus', right: opration })
}

operation.prototype.multiply = function (opration) {
    return new operation({ left: this, operator: 'multiply', right: opration })
}

operation.prototype.divide = function (opration) {
    return new operation({ left: this, operator: 'divide', right: opration })
}

operation.prototype.toThePowerOf = function (opration) {
    return new operation({ left: this, operator: 'toThePowerOf', right: opration })
}