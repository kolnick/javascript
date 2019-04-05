function sum(a, b) {
    return a + b;
}

let sum1 = sum(1, 2);

console.log(sum1);

var max = 10;
fn = function (x) {
    if (x > max) {
        console.log(x);
    }
};

(function (f) {
    var max = 100;
    f(15);
})

(fn);


// ES5/ES3  默认参数
function ff(x, y, z) {
    if (y === undefined) {
        y = 7;
    }
    if (z === undefined) {
        z = 42;
    }
    return x + y + z;
}

console.log(ff(30, 50));

{
    //ES6 函数默认参数
    function defaultParam(x, y = 2, z = 3) {
        return x + y + z;
    }

    console.log(defaultParam(1, 5));
}

{
    function checkParameter() {
        throw new Error("can,t be empty");
    }

    function zz(x = checkParameter(), y = 5, z = 42) {
        return x + y + z;
    }

    /*   try {
           zz();
       } catch (e) {
           console.log(e);
       } finally {

       }*/

    // ES3,ES5 可变参数列表
    function mulParams() {
        var a = Array.prototype.slice.call(arguments);
        var sum = 0;
        a.forEach(function (item) {
            sum += item;
        });
        return sum;
    }

    console.log(mulParams(1, 2, 3, 4, 5));

    //ES6 可变参数列表
    function es6MulParams(...params) {
        var sum = 0;
        params.forEach(item => {
            sum += item;
        });
        return sum;
    }

    let number = es6MulParams(1, 2, 3, 4);
    console.log(number)


}