//ES6 可变参数列表
function es6MulParams(...params) {
    let sum = 0;
    params.forEach(item => {
        sum += item;
    });
    return sum;
}

let number = es6MulParams(1, 2, 3, 4);
console.log(number)