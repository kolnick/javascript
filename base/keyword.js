var windows = {};
//ES 5
Object.defineProperty(windows, "PI4", {
    value: 3.1415555,
    // 默认可写是false
    // writable=false;
    writable: true,
});

// 无法进行修改
windows.PI4 = 32442;
console.log(windows.PI4);
