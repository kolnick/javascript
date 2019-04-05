const callbacks = [];

for (var i = 0; i < 2; i++) {

    callbacks[i] = function () {
        return i * 2;
    }
}

console.table(callbacks[0]);
console.table(callbacks[1]);
console.table(callbacks[2]);

() => {
    return 1;
}


{
    var events = [1, 2, 3, 4, 5];
    //ES5
    var odds = events.map(function (v) {
        return v + 1;
    });

    console.log(odds);


    //ES6 参数只有一个 可省略参数
    let numbers = events.map(v => v + 1);
    console.log(numbers);

}


