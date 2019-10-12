/***
 *  1. 将伪数组对象或可遍历对象转换为真数组  Array.from(v)
 *  2.  将一系列值转换成数组 Array.of(v1,v2,v3)
 *  3. find(function(value,index,arr)){return true}: 找出第一个满足条件的返回true的元素
 *  4. findIndex(function(value,index,arr)){return true} 找出第一个满足条件的返回true的元素下标
 */

let btns = [1, 2, 3, 4];
/*for (const btn of btns) {

    console.log(btn);
}*/
//1. 将伪数组对象或可遍历对象转换为真数组
Array.from(btns).forEach((x, y) => {
    console.log(x, y);
});


//2. 将一系列值转换成数组
let obj = [1];
let obj1 = [2];
let obj2 = [3];
let arrays = Array.of(obj, obj1, obj2);

console.log(arrays);

let arr2 = [1, 2, 3, 4, 5];
//3. find(function(value,index,arr)){return true}: 找出第一个满足条件的返回true的元素
let find = arr2.find((item) => {
    return item > 4;
});
console.log(find);
// 4.  findIndex(function(value,index,arr)){return true} 找出第一个满足条件的返回true的元素下标
let index = arr2.findIndex((item, index) => {
    return item > 0;
});
console.log(index);