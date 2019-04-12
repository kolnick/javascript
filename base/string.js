// 创建一个字符串
let string = String("hello world");

console.log(string);
let str = 'hello';

// 连接字符串
let s = str.concat(" world welcome");
console.log("连接后的字符串" + s);

let keyWorld = "world";
let number = s.indexOf(keyWorld);
console.log("查找:" + keyWorld + "在" + s + "中位于" + number + "位置");

// 分割后的字符串 默认以,号分割
let strArr = s.split(" ");
let len = strArr.length;
// 遍历数组
console.log("----------遍历字符串数组--------")
for (let i = 0; i < len; i++) {
    console.log(strArr[i]);
}
// 转换成大写
console.log(keyWorld.toUpperCase());


let obj = {name: 'kolnick'};
// 模板字符串
let xxx = `my name:${obj.name}`;
console.log(xxx);