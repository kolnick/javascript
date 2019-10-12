let obj = [1, 2, 3, 4];

// ES6 增加了 for of
// 支持iterator 元素  数组，字符串，arguments，set 、map
/**
 * 当使用 for  of 进行遍历的时候，首先去找Symbol.iterator
 * 三点运算符 默认调用Symbol.iterator
 */
for (let x of  obj) {
    console.log(x);
}

let obj ={name:'kolnick'};

let [a, b] = obj;

console.log(a,b);

