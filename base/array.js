// 数组的定义
let array = [1, 2, 3, 4];
console.log(array);

// 声明一个含有5个元素的数组
let t = new Array(5);

console.log(t);

// 拼接元素
let s = array.join("-");
console.log(s)

// 颠倒元素
let reverse = array.reverse();
console.log(reverse);


// 合并数组
// ES5
{
    let params = ['hello', true, 7];
    let other = [1, 2].concat(params);
    console.log(other);
}

// ES6
{
    let params = ['hello', true, 7];
    // 利用可变参数运算符进行合并数组
    let other = [1, 2, ...params];
    console.log(other);
}