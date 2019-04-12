// 声明函数
function sum(a, b) {
    return a + b;
}

// 调用函数
let sum1 = sum(1, 2);

console.log(sum1);

// 声明
var max = 10;
fn = function (x) {
    if (x > max) {
        console.log(x);
    }
};

//
(function (f) {
    var max = 100;
    f(15);
})

(fn);


// ES3/ES5  默认参数
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


}

//