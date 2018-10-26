const Router = require('koa-router');
const dealfn = require('./dealfn');
const router = new Router();

//获取轮播图
router.get('/swiper', async (ctx, next) => {
    await dealfn.readFileData('swiper.json').then(data => {
        ctx.body = data;
    });
});

//获取城市列表
router.get('/city', async (ctx, next) => {
    await dealfn.readFileData('city.json').then(data => {
        ctx.body = data;
    });
});

//获取热映电影列表
router.get('/bj_hot', async (ctx, next) => {
    await dealfn.readFileData('bj_hot.json').then(data => {
        ctx.body = data;
    });
});

//获取即将上映电影列表
router.get('/coming', async (ctx, next) => {
    await dealfn.readFileData('coming.json').then(data => {
        ctx.body = data;
    });
});


module.exports = router;