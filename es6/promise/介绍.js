/**
 *  Promise对象： 表示未来某个将要发生的事件
 *  有了Promise对象，可以将异步操作以同步的流程表达出来，避免了层层嵌套的回调函数
 *  Promise是一个构造函数
 *
 *  Promise 三个状态
 *
 *   pending: 初始化
 *   fullfilled：成功
 *   rejected : 失败
 *
 */
// 创建Promise对象
let promise = new Promise((resolve, reject) => {
    console.log('1111');

    setTimeout(() => {
        console.log(" 我被调用了");
        // 根据异步任务的返回结果来修改promise状态

        // 异步任务执行成功

       // resolve(); // 修改promise状态  fullfilled

        reject();
    }, 2000);
}).then(() => {
    //成功回调
    console.log(123);
}, () => {
    console.log("失败了");
});