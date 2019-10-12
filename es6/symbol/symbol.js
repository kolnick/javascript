/***
 * ES5  对象的属性名都是字符串，容易造成重名,污染环境
 *
 *
 * ES6
 *  添加了一种原始数据类型symbol（String、Number、Boolean、null、undefined、对象）
 *
 *  特点：
 *  1.symbol属性值对应的值是唯一的，解决命名冲突问题
 *  2.symbol值不能与其他数据进行计算，包括同字符串拼串
 *  3. for in ,for of 遍历时不会遍历 symbol属性。
 *
 *  使用方式
 *   调用 symbol函数得到symbol值
 *
 *   let  symbol= Symbol();
 *   let obj= {};
 *   obj[symobl]='hello';
 *
 *
 */

// 传参标识
let symbol1 = Symbol("one");
console.log(symbol1);
let symbol2 = Symbol("two");
console.log(symbol2);

console.log(symbol1 === symbol2);


// 遍历symbol

let obj =Symbol();
