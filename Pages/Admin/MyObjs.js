var MyObjs = {}
MyObjs.operationWorker = function (options) {
    var thisObjWorker = this
    this.obj = options.obj
    options.template = '\
<div {{main.returnHTMLtag}} class="panel panel-default">\
    <div class="panel-heading">\
        <h4 class="panel-title">\
            <a data-toggle="collapse" href="#collapse{{main.id}}">' + (options.preface ? options.preface : '') + ((options.name || options.obj.name) ? ":" : "") + (options.name || options.obj.name || 'Operation') + '\
            </a>\
        </h4>\
    </div>\
    <div id="collapse{{main.id}}" class="panel-collapse collapse">\
        <div {{body.returnHTMLtag}} class="panel-body">\
        </div>\
    </div>\
</div>'
    options.body = []
    console.log('obj', this.obj.left)
    console.log('type', jQuery.type(this.obj.left))
    if (this.obj.left) (jQuery.type(this.obj.left) == 'object') ? options.body.push(new MyObjs.operationWorker({ preface: 'Left', obj: this.obj.left })) : options.body.push(new MyObjs.stringProperty({ preface: 'Left', property: this.obj.left }))
    if (this.obj.operator) options.body.push(new MyObjs.operatorSelect({ name: "operator", property: this.obj.operator }))
    if (this.obj.right) (jQuery.type(this.obj.right) == 'object') ? options.body.push(new MyObjs.operationWorker({ preface: 'Right', obj: this.obj.right })) : options.body.push(new MyObjs.stringProperty({ preface: 'Right', property: this.obj.right }))
    if (this.obj.then && this.obj.then.length > 0) options.body.push(new MyObjs.arrayProperty({ name: 'Then', property: this.obj.then }))
    if (this.obj.else && this.obj.else.length > 0) options.body.push(new MyObjs.arrayProperty({ name: 'Else', property: this.obj.else }))
    var thisObjectWorker = BSJS.inherit(this, new BSJS.obj(options))
    return this
}
MyObjs.arrayProperty = function (options) {
    var thisArrProp = this
    this.arr = options.property
    options.template = '\
<div {{main.returnHTMLtag}} class="panel panel-default">\
    <div class="panel-heading">\
        <h4 class="panel-title">\
            <a data-toggle="collapse" href="#collapse{{main.id}}">' + (options.name ? options.name : 'Array') + '\
            </a>\
        </h4>\
    </div>\
    <div id="collapse{{main.id}}" class="panel-collapse collapse">\
        <div {{body.returnHTMLtag}} class="panel-body">\
        </div>\
    </div>\
</div>'
    options.body = []
    this.arr.forEach(function (a) {
        options.body.push(new MyObjs.operationWorker({ obj: a }))
    })
    var thisObjectWorker = BSJS.inherit(this, new BSJS.obj(options))
    return this
}
MyObjs.stringProperty = function (options) {
    this.obj = options.property
    var thisStr = this
    options.name = (options.preface ? options.preface + ":" : "") + (options.name || options.name == 0) ? options.name : options.property
    options.template = '\
       <div  {{main.returnHTMLtag}}> <span>' + options.name + ':</span><span {{body.returnHTMLtag}}></span>    </div>'
    options.body = new BSJS.dataConnection({
        obj: thisStr.obj
        , prop: options.name
        , twoWay: true
    }).marker()
    var thisObjectWorker = BSJS.inherit(this, new BSJS.obj(options))
    return this
}

MyObjs.operatorSelect = function (options) {
    this.obj = options.property
    var thisStr = this
    options.name = (options.op || options.name == 0) ? options.name : 'String'
    options.template = '\
       <div  {{main.returnHTMLtag}}> <span>' + options.name + ':</span><span {{body.returnHTMLtag}}></span>    </div>'
    options.body = new BSJS.dataConnection({
        obj: thisStr.obj
        , prop: options.name
        , twoWay: true
    }).marker()
    var thisObjectWorker = BSJS.inherit(this, new BSJS.obj(options))
    return this

}