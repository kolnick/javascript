var array = [3, 4, 5, 1, 2];

// 遍历
array.forEach(function (item, index) {
    console.log(item, index);
});

// map遍历 返回一个新的数组
let numbers = array.map(function (item, index) {
    return item + 10;
});

console.log(numbers);

// filter
let numbers1 = array.filter(function (item) {
    return item > 3;
});

console.log(numbers1);