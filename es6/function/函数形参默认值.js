{
    //ES6 函数默认参数
    function defaultParam(x, y = 2, z = 3) {
        return x + y + z;
    }

    console.log(defaultParam(1, 5));
}