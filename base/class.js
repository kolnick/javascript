let obj = {sex: 1};

// 访问
console.log(obj.sex);

console.log(obj['sex']);

const pro = "sex";

console.log(obj[pro]);


// 删除属性的唯一方法是使用 delete 操作符；设置属性为 undefined 或者 null 并不能真正的删除属性， 而仅仅是移除了属性和值的关联。
// 设置属性为null 值

obj.sex = null;
obj.sex = undefined;
console.log(obj);

delete obj.sex;

console.log(obj);