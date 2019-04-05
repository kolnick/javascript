var nubList = [
    {
        expressId: "00001", //快递单号ID
        expressNum: "数据1"
    },
    {
        expressId: "00002", //快递单号ID
        expressNum: "数据2"
    },
    {
        expressId: "00003", //快递单号ID
        expressNum: "数据3"
    },
    {
        expressId: "00004", //快递单号ID
        expressNum: "数据4"
    }
];


var nub = nubList.find(nub => nub.expressId === "00002");
console.log(nub);

// true
console.log(null === null);


