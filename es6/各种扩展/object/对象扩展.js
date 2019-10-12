/***
 *  1. Object.is(v1,v2);
 *  判断2个数据是否完全相等
 *
 *  2.Object.assign(target,source1,source2..)
 *  将源对象的属性复制到目标对象上
 *
 *  3.直接操作__proto__属性
 *
 *  let obj2={};
 *
 *  obj2.__proto__==obj1;
 *
 */

console.log(0 == -0);
console.log(NaN == NaN);
console.log("------");

console.log(Object.is(0, -0));// false
console.log(Object.is(NaN, NaN)); // true

let obj = {};
let obj2 = {username: 'kolnick', age: 42};
let obj3 = {sex: '男'};
Object.assign(obj, obj2, obj3);
console.log(obj);

let obj4 = {};
let obj5 = {money:50000};
