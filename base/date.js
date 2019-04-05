let date = new Date();

console.log(date.toLocaleString());

console.log(date.getSeconds());

var second = Date.parse(new Date());

// 精确到妙
console.log(second);

// 精确到毫秒
var millsecond = new Date().getTime();

console.log(millsecond);
