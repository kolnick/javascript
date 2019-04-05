var number = "123";

// 数据类型转换
let number1 = Number(number);

console.log(typeof number1);


if (number1 === 123) {
    console.log("equals");
}

// 转换成字符串
let s = number1.toString();

console.log(typeof s);


// 输出 123
let number2 = parseInt("123helloworld 123");
console.log(number2);


// 输出NaN
let number3 = parseInt("helloworld1232");
console.log(number3);

// true
let b = Boolean("true");
console.log(b);


// true
let c = Boolean("1");
console.log(c);

let d = Boolean("0");
console.log(d);
