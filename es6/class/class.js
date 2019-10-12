/**
 *  1.通过class定义类/实现类的继承
 *  2.再类中通过constuctor定义构造方法
 *  3.通过new来创建类的实例
 *  4.通过extends 来实现类的类的继承
 *  5.通过super 调用父类的构造方法
 *  6.重写从父类中继承的一般方法
 *
 */


class Person {

    // 类的构造方法
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 类的一般方法
    showName() {
        console.log(this.name);
    }

}

class Student extends Person {

    constructor(name, age, salary) {
        super(name,age);
        this.salary = salary;
    }
    showName() {
        console.log(this.name,this.age,this.salary);
    }
}

/*let person = new Person('kolnick', 20);
console.log(person);
person.showName();*/

let student = new Student('kolnick', 11, 20);
console.log(student.salary);
console.log(student.age);
//console.log(student.name);
student.showName();