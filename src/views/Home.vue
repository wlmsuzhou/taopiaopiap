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
        <div class="swpier">
            <swiper :options='swiperOption' ref="mySwiper">
                <swiper-slide v-for="img in imgs" :key='img.id'>
                    <img :src="img.smallPicUrl" alt="">
                </swiper-slide>
            </swiper>

        </div>
    </div>
</template>

<script>
import city from '../components/Home/city'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getSwiper, getHotList } from '../service/myservice'
export default {
    data() {
        return {
            imgs:[],
            swiperOption: {
                loop: true,
			    //pagination: '.swiper-pagination',
			    paginationClickable: true,
			    autoplay : 2000,
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
        swiperSlide
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
    div.swiperImage {
        width: 100%;
        height: 300px;
        //background-image: url('../mock/images/1.jpg');
        //background-position: cover;
    }
</style>
