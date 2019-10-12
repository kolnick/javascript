/***
 * 拷贝数据方式
 *
 * 1.Object.assign 浅拷贝
 * 2.Arrays.prototype.concat()  浅拷贝
 * 3.Arrays.prototype.slice() // 浅拷贝
 * 4.JSON.parse(JSON.stringify()) 深拷贝
 */
let obj = {username: 'xx'};
// 浅拷贝
let obj3 = Object.assign(obj);
obj3.username = 'kolnick';
console.log(obj.username);


