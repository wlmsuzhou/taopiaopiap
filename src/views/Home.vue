<template>
    <div>
        <city></city>
        <header class="navHeader">
            <div class="city">
                <span class="cityName" >北京</span>
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
            <hot :hotList="hotList"></hot>
        </div>
        <div class="comingMov" v-show="!isHot">
            <ul>
                <li v-for="item in comingList">
                    <div class="leftImage" v-lazy:background-image="item.poster">
                    </div>
                    <div class="movInfo">
                       <div class="movWrap">
                            <p class="movName">{{item.showName}}</p>
                            <p class="count">{{item.wantCount}}人想看</p>
                            <p class="act">导演：{{item.director}}</p>
                            <p class="act">主演：{{item.leadingRole}}</p>
                        </div>
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
// import { getSwiper, getHotList, getComingList} from '../service/myservice'
import { getSwiperApi , getHotList , getComingList} from '../service/api'
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
            isHot: true,
            hotList: [],
            comingList: []
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
    created() {
        this.getSwiperData();
        this.getHotListData();
        this.getComingListData();
        //console.log(this.swiper);
    },
    methods: {
        // 获取swiper数据
        getSwiperData () {
            var self = this;
            getSwiperApi().then((data) => {
                self.imgs = data.data.returnValue;
            });
            // getSwiper().then ((data) => {
            //     self.imgs = data.data.returnValue;
            // });
        },
        changeHotTab() {
            this.isHot = true;
        },
        changeRightTab() {
           //this.slideShow = !this.slideShow;
           this.isHot = false;
        },
        //获取热映列表
        getHotListData() {
            var self = this;
            getHotList().then((data) => {
                self.hotList = data.data.returnValue;
            });
        },
        // 获取即将上映的电影
        getComingListData() {
            var self = this;
            getComingList().then((data) => {
                self.comingList = data.data.returnValue;
            });
        }
    }
}
</script>

<style lang="less">
body {
    padding: 0px;
}
.city {
    .city-arrow-icon {
        width: 14px;
        height: 14px;
        display: inline-block;
    }
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
                    .movWrap {
                       //width: 50%;
                       box-sizing: content-box;
                        p {
                            font-size: 14px;
                            margin: 5px;
                            width: 200px;
                            text-overflow: ellipsis;
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
