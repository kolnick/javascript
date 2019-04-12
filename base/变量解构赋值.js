// 定义一个对象
let obj = {name: 'kolnick', age: 18};

// 将一个对象进行解构赋值 只拿自己关心的属性
let {name} = obj;

console.log(name);


// 解构数组
let arr = [1, 2, 3, 4, 5];
// 取下标的占位
let [, , a, b, c] = arr;

console.log(a);

