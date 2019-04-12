// 为全局所有的类添加bar属性
Object.prototype.bar = 1;


console.log(Object.prototype.bar);

// 声明一个对象
let myObject = {goo: null};


let hasProperty = myObject.hasOwnProperty('bar');
console.log(hasProperty);

// 声明一个对象
function Point(x, y) {
    this.x = x;
    this.y = y;
}

// 扩展一个对象函数
Point.prototype.showCode = function () {
    console.log("x=" + this.x + "-----y=" + this.y);
};

let point1 = new Point(3, 4);
let point2 = new Point(45, 12);

console.log(point2.showCode());
console.log(point1.showCode());

console.log("point---" + point1.x);


// 定义一个对象并赋值
var obj = {name: "kolnick", age: 18};
console.log(obj.age);


// 对象代理
{
    // ES3,ES5 数据保护
    let Person = function () {
        let data = {name: 'es3', 'sex': 'male', age: 18};

        this.get = function (key) {
            return data[key];
        };
        this.set = function (key, value) {
            if (key !== 'sex') {
                data[key] = value;
            }
        };
    };
    // 声明一个实例

    let person = new Person();

    //console.log(person.get("name"));
    console.table({
        name: person.get('name'),
        sex: person.get('sex'),
        age: person.get('age'),
    });
    person.set('age', 20);
    console.log(person.get('age'));


    // 获取一个对象所有属性
    for (var key in person) {
        console.log(key, obj[key]);
    }

    // 获取一个对象所有属性  方式2

    let strings = Object.keys(person);
    console.log(strings);
}

// ES6  保护属性

{
    let Person = {
        name: 'es6',
        sex: 'mail',
        age: 18,
    };

    let person = new Proxy(Person, {
        get(target, key) {
            return target[key];
        },

        set(target, key, value) {
            if (key !== 'sex') {
                target[key] = value;
            }
        }
    });


    console.log(person.name);
    console.log(person.sex = 23);

}

// ES6 简化对象的简写方式
let myObj = {
    name: 'myObj kolnick',
    age: 19,
    getName() {
        return this.name;
    },
    setName(name) {
        this.name = name;
    },
};
let name = myObj.getName();
console.log(name);
myObj.setName('ddd');
console.log(myObj.getName());