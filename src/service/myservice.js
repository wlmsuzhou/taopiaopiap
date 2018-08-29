// 获取swiper数据
export function getSwiper () {
    return new Promise((resolve,reject) => {
        var data = require('../mock/swiper.json');
        var error = 'error';
        if (data) {
            resolve(data);
        } else {
            reject(error);
        }
    });
}

//获取热映电影
export function getHotList () {
    return new Promise ((resolve,reject) => {
        var data = require('../mock/sh_hot.json');
        var error = 'error';
        if (data) {
            reslove(data);
        } else {
            reject(error);
        }
    });
}