let url  = require('url');
let dealFn = require('./dealfn.js');

function sendDataFn(req, res, filename, needcity) {
    let query = url.parse(req.url, true).query,
    name = query.name || '',
    city = query.city,
    readFilenName = '',
    sendData = {
        errno: 0,
        city: city,
        msg: 'ok',
        data: {}
    };
    if (needcity) {
        readFilenName = city+filename;
    } else {
        readFilenName = filename;
    }
    dealFn.readFileData(name + readFilenName).then((data) => {
        sendData.data = data;
        res.send(sendData);
    }, (msg) => {
        sendData.errno = -1;
        sendData.msg = '暂时没有数据';
        res.send(sendData);
    });
}


