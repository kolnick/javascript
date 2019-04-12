// 特点
// 1. 简洁
// 2. 没有自己的this,不是调用的时候决定，而是定义的时候处在的对象就是它的this
//    看外层的是否有函数  如果有外层函数的this 就是内部箭头函数的this  如果没有，则this是window


// 没有形参
let fun = () => console.log("我是箭头函数");
fun();
//  只有一个形参 小括号可以省略
let fun2 = a => console.log(a);
fun2(2);

// 两个以上的形参 括号不能省略
let fun3 = (x, y) => console.log(x, y);
fun3(1, 2);

// 函数体的情况

// 1.只有一条语句或者表达式 不用写大括号
let fun4 = () => console.log('只有一条语句或者表达式');
fun4();
let sum = (x, y) => x + y;
let result = sum(1, 2);
console.log(result);


