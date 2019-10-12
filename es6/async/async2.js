function test2() {
    return 'hello world';
}

/*async function asyncPrint() {
    let result = await test2();
    console.log(result);
}*/

async function asyncPrint() {
    let result = await Promise.resolve('promise');
    console.log(result);
    result = await Promise.reject('失败了...');
    console.log(result);
}


asyncPrint();