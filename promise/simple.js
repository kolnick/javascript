// promise 回调的使用
{
    // promise 状态

    /**
     * 1.pending  待定  初始状态
     *
     * 2.fulfilled  实现 操作成功
     *
     * 3.rejected   被否决  操作失败
     *
     */

    new Promise(function (resolve, reject) {

        resolve();  // 数据处理完成

        reject();   // 数据处理出错
    }).then(function A() {
        // 成功,下一步
        console.log("成功");
    }, function B() {
        // 失败,做相应处理
        console.log("失败");
    });

}
