<template>
    <div>
        <header class="navHeader">
            <div class="city">
                <span class="cityName">北京</span>
                <span class="city-arrow-icon vm"></span>
            </div>
            <div class="hotMov" :class="{active: isHot}" @click="changeHotTab()">
                <span>正在热映</span>
            </div>
            <div class="furtureMov" :class="{active: !isHot}" @click="changeRightTab()">
                <span>即将上映</span>
            </div>
            <span class="slide" :class="{test:!isHot}"></span>
        </header>
        <div class="hot" v-show="isHot">
            <div class="swpier">
                <swiper :options='swiperOption' ref="mySwiper" v-if="imgs.length">
                    <swiper-slide v-for="img in imgs" :key='img.id' class="">
                        <!-- <img :src="img.smallPicUrl" alt=""> -->
                        <div class="swiperImage" v-lazy:background-image="img.smallPicUrl"></div>
                    </swiper-slide> 
                </swiper>
            </div>
            <hot></hot>
        </div>
        <div class="comingMov" v-show="!isHot">
            <ul>
                <li>
                    <div class="leftImage" v-lazy:background-image="'http://img1.imgtn.bdimg.com/it/u=4065566051,2509446432&fm=26&gp=0.jpg'">
                    </div>
                    <div class="movInfo">
                        <p class="movName">28岁未成年</p>
                        <p class="count">10000人想看</p>
                        <p class="act">导演：张末</p>
                        <p class="act">主演：倪妮, 霍建华,马苏,王大陆</p>
                        <div class="buy">
                            <button>预售</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="leftImage" v-lazy:background-image="'http://img1.imgtn.bdimg.com/it/u=4065566051,2509446432&fm=26&gp=0.jpg'">
                    </div>
                    <div class="movInfo">
                        <p class="movName">28岁未成年</p>
                        <p class="count">10000人想看</p>
                        <p class="act">导演：张末</p>
                        <p class="act">主演：倪妮, 霍建华,马苏,王大陆</p>
                        <div class="buy">
                            <button>预售</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="leftImage" v-lazy:background-image="'http://img1.imgtn.bdimg.com/it/u=4065566051,2509446432&fm=26&gp=0.jpg'">
                    </div>
                    <div class="movInfo">
                        <p class="movName">28岁未成年</p>
                        <p class="count">10000人想看</p>
                        <p class="act">导演：张末</p>
                        <p class="act">主演：倪妮, 霍建华,马苏,王大陆</p>
                        <div class="buy">
                            <button>预售</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import city from '../components/Home/city'
import hot from '../components/Home/hot'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getSwiper, getHotList } from '../service/myservice'
export default {
    data() {
        return {
            imgs:[],
            swiperOption: {
                // observer:true,
                // observeParents:true,
                notNextTick: true,
                loop: true, 
                autoplay : 2000,
			    //pagination: '.swiper-pagination',
			    paginationClickable: true,
			    
                //autoplayDisableOnInteraction : false,
                uniqueNavElements: true	
            },
            slideShow: true,
            isHot: true
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    },
    components: {
        city,
        swiper,
        swiperSlide,
        hot
    },
    methods: {
        // 获取swiper数据
        getSwiperData () {
            var self = this;
            getSwiper().then ((data) => {
                self.imgs = data.data.returnValue;
            });
        },
        changeHotTab() {
            this.isHot = true;
        },
        changeRightTab() {
           //this.slideShow = !this.slideShow;
           this.isHot = false;
        }
    },
    created() {
        this.getSwiperData();
        //console.log(this.swiper);
    }
}
</script>

<style lang="less">
body {
    padding: 0px;
}
    header.navHeader {
        background: #fff;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 5px 25px;
        box-sizing: border-box;
        position: relative;
        .active {
            color: #ff4d64;
        }
    }
    .swiperImage {
        width: 100%;
        height: 200px;
        background-size: cover;
        background-position: center;
    }
    .slide {
        display: block;
        width: 33%;
        position: absolute;
        bottom: 2px;
        left: 30%;
        transition: left 1s;
        border-bottom: 2px solid #ff4d64;
    }
    .test {
        left: 63%;
    }
    //即将上映
    div.comingMov {
        margin: 0px;
        ul {
            padding: 0px;
            margin: 0px;
            li {
                list-style-type: none;
                display: flex;
                min-height: 50px;
                border-bottom: 1px solid #ccc;
                padding: 10px;
                box-sizing: content-box;
                .leftImage {
                    flex: 25%;
                    min-height: 100px;
                    //background: #ccc;
                    background-size: cover;
                    background-position: center;
                }
                .movInfo {
                    flex: 75%;
                    text-align: left;
                    margin-left: 10px;
                    position: relative;
                    p {
                        font-size: 14px;
                        margin: 5px;
                        white-space: nowrap;
                        overflow: hidden;
                        &.movName {
                            font-size: 16px;
                        }
                        &.count {
                            font-size: 12px;
                            color: orange;
                        }
                        &.act {
                            color: #aaa;
                        }
                    }
                    .buy {
                        position: absolute;
                        right: 20%;
                        bottom: 50px;
                        button {
                            border-style: none;
                            padding: 5px 10px;
                            border: 1px #199eef solid;
                            border-radius: 10px;
                            color: #199eef;
                            background: #fff;
                        }
                        //right:20%;
                    }
                }
            }
        }
    }
</style>
