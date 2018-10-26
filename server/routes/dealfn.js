let fs = require('fs');

let dealfn = {
    /**
     * [通过promise写入数据]
     */
    writeFileData: (file, obj) => {
        let promise = new Promise((resolve, reject) => {
            obj = JSON.stringify(obj);
            fs.writeFile('./database/' + file, obj,function (err) {
                if (err) {
                    reject('fail' + err);
                } else {
                    reject('success');
                }
            })
        });
        return promise;
    },

    /**
     * [通过Pomise读取数据]
     */
    readFileData: (file) => {
        let promise = new Promise((resolve, reject) => {
            fs.readFile('./database/'+ file, function (err,data) {
                if (err) {
                    console.log(err);
                    reject('fail');
                } else {
                    data = JSON.parse(data);
                    resolve(data);
                }
            });
        });
        return promise;
    }
}
module.exports = dealfn;