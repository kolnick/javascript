Object.prototype.bar = 1;

console.log(Object.prototype.bar);

let xx = {goo: null};

console.log(xx.bar);

let hasProperty = xx.hasOwnProperty('bar');
console.log(hasProperty);
let d = xx.hasOwnProperty('goo');

console.log(d);


class Point {

}

// 定义一个对象并赋值
var obj = {name: "kolnick", age: 18};

console.log(obj.age);



