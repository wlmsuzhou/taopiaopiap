<template>
    <div>
        <header class="navHeader">
            <div class="city">
                <span class="cityName">北京</span>
                <span class="city-arrow-icon vm"></span>
            </div>
            <div class="hotMov">
                <span>正在热映</span>
            </div>
            <div class="furtureMov">
                <span>即将上映</span>
            </div>
        </header>
        <div class="hot">
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
            }
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
        }
    },
    created() {
        this.getSwiperData();
        //console.log(this.swiper);
    }
}
</script>

<style lang="less">
    header.navHeader {
        background: #fff;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 5px 25px;
        box-sizing: border-box;
    }
    .swiperImage {
        width: 100%;
        height: 200px;
        background-size: cover;
        background-position: center;
    }
</style>
