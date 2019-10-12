/**
 *
 * 1.异步编程方案之一
 * 2.Generator函数是一个状态机  ，内部封装了不同状态的数据
 * 3.用来生成遍历器对象
 * 4.可暂停函数（惰性求值）,yield 可暂停, next 方法可启动,每次返回的是yield 后的表达式结果
 *
 * 特点：
 * 1.function 与函数名之间有一个星号
 * 2.内部用yield 表达式来定义不同的状态
 *
 * 例如:
 *  function * generatorExample()
 *  {
 *      let result=yield 'hello'; // 状态机为hello
 *      yield 'generator';      // 状态值为generator
 *  }
 *
 * 3. generator 函数返回的是指针对象,而不会执行函数内部逻辑
 * 4.调用next方法函数内部逻辑开始执行，遇到yield表达式停止，返回（value:yield后的表达式结果）
 *
 **/
function* myGenerator(xxx) {
    console.log("开始执行");
    let result = yield  xxx; // 执行异步任务操作 执行完后进行暂停
    console.log(result);
    console.log("暂停后,再次执行");
    yield  'world';
    console.log("遍历完毕");
}

let gen = myGenerator('hack');
console.log(gen.next());
console.log(gen.next(123)); // 将123 作为执行完毕的结果给result
console.log(gen.next());

