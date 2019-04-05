function Foo() {
    this.value = 42;
}

Foo.prototype = {
    method: function () {

    }
}
;

// 输出 undefined
console.log(Foo.prototype.value);


