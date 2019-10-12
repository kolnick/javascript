async function test() {
    console.log("开始执行", new Date().toLocaleString());
    await foo();
    console.log("执行完毕执行", new Date().toLocaleString());
}

async function foo() {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}

test();

