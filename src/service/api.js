import * as url from './urlConfig'
import axios from 'axios'

//获取轮播图
export  function getSwiperApi() {
    return new Promise((resolve, reject) => {
        axios.get(url.swiper).then((response) => {
            resolve(response.data);
        }, (err) => {
            reject(err);
        });
    });
}

//获取热映列表
export function getHotList() {
    return new Promise((resolve, reject) => {
        axios.get(url.hot).then((response) => {
            resolve(response.data);
        }, (error) => {
            reject(error);
        });
    });
}

//获取即将上映列表
export function getComingList() {
    return new Promise((resolve, reject) => {
        axios.get(url.coming).then((response) => {
            resolve(response.data);
        }, (err) => {
            reject(err);
        });
    });
}

//获取城市列表
export function getCitysList() {
    return new Promise ((resolve,reject) => {
        axios.get(url.city).then((response) => {
            resolve(response.data);
        }, (err) => {
            reject(err);
        });
    });
}
