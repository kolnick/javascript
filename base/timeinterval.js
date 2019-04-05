var count = 1;

function change() {
    console.log(count++);
}

// 延迟多少时间后执行
setTimeout(change, 2000);

// 取消设置延迟时间
clearTimeout(change);
// 设置计时器
//setInterval(change, 1000);

// 取消计时器
clearInterval(change);