var obj = {username: 'kolnick'};
// 将对象转换成JSON 字符串
obj = JSON.stringify(obj);
console.log(obj);
// 将JSON字符串转换成对象

let parse = JSON.parse(obj);
console.log(parse);
