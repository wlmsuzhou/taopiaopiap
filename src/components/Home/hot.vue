<template>
    <div class="hotMovie">
        <ul>
            <router-link to="movieDetail">
                <li v-for="item in hotList">
                    <div class="movieImage">
                        <div class="moImg" v-lazy:background-image="item.poster">
                        </div>
                    </div>
                    <div class="buy">
                        <button class="btn">购买</button>
                    </div>
                    <div class="movieInfo">
                        <h3>{{item.showName}}</h3>
                        <div class="full-star">
                            <div class="score-star"></div>
                            <div class="score">9.4</div>
                        </div>
                        <div class="des">
                            <p>{{item.highlight}}</p>
                            <p>{{item.leadingRole}}</p>
                        </div>
                        <div class="act">
                            <span class="one">1212五折狂欢</span>
                            <span>1212特惠抢票</span>
                        </div>
                    </div>
                </li>
            </router-link>
            
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    props:{
        'hotList': {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style lang="less">
    div.hotMovie {
        background: #fff;
        ul {
            padding: 5px 0px;
            margin: 0px;
            li {
                width: 100%;
                min-height: 100px;
                list-style-type: none;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                box-sizing: border-box;
                background: rgba(206, 198, 198, 0.21);
                position: relative;
                margin-bottom: 10px;
                &:last-child {
                    margin-bottom: 100px;
                }
                .buy {
                    position: absolute; 
                    right: 10px;
                    top: 30%;
                    box-sizing: border-box;
                    .btn  {
                        padding: 5px 10px;
                        border-style: none;
                        background: #fff;
                        color: rgb(207, 140, 140);
                        border: 1px solid rgb(207, 140, 140);
                        border-radius: 5px;
                        cursor: pointer;
                        // &:focus {
                        //     background: rgb(207, 140, 140);
                        // }
                    }
                }
                .movieImage {
                    flex: 35%;
                    //background: #eee;
                    padding: 10px;
                    .moImg {
                        width: 100%;
                        height: 150px;
                        background-size: cover;
                        background-position: center;
                    }
                }
                .movieInfo {
                    flex: 65%;
                    //background: yellow
                    text-align: left;
                    color: rgb(11, 22, 22);
                    padding: 5px;
                    .full-star {
                        color: #9c9c9c;
                        width: 50px;
                        height: 15px;
                        background-size: auto 100%;
                        background-image: url('../../assets/images/nostart.svg');
                        position: relative;
                        bottom: 10px;
                        .score-star {
                            width: 100%;
                            height: 100%;
                            display: inline-block;
                            background-size: auto 100%;
                            background-image: url('../../assets/images/star.svg');
                        }
                        .score {
                            position: absolute;;
                            display: inline-block;
                            right: -30px;
                            top: 0px;
                        }
                    }
                    .des {
                        color: rgb(194, 187, 187);
                        width: 200px;
                        //white-space: nowrap;
                        p {
                            font-size: 13px;
                            color: #9c9c9c;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            line-height: height;
                            margin: 3px;
                        }
                    }
                    .act {
                        border-top: 1px solid #ccc;
                        margin-top: 10px;
                        padding: 10px 5px;
                        font-size: 14px;
                        color: #9c9c9c;
                        text-align: left;
                        .one {
                            display: inline-block;
                            border-right: 2px solid #ccc;
                            padding-right: 5px;
                            color: #ec8518;
                        }
                    }
                }
            }
        }
    }
</style>

