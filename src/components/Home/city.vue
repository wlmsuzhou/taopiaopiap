<template>
    <div class="citys" v-if="true">
        <div class="choose">
            <span class="close">×</span>
            <h4>选择城市</h4>
        </div>
        <div class="list">
            <div class="cityList">
                <ul>
                    <li>热门</li>
                    <li>北京</li>
                    <li>上海</li>
                    <li>广州</li>
                </ul>
            </div>
            
            <div class="navCity">
                <p>热门</p>
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                    <li>F</li>
                    <li>G</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cityList:[]
        }
    }
}
</script>
<style lang="less">
 div.citys {
    z-index: 1000;
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    background: #fff;
    .choose{
       text-align: center;
       border-bottom: 1px solid #ccc;
       margin-left: 0px;
       .close {
           position: absolute;
           right: 20px;
           display: inline-block;
           font-size: 20px;
           font-weight: 700;
       }
    }
    .list {
        display: flex;
        .cityList {
            flex: 80%;
            ul {
                margin: 0px;
                padding: 0px;  
                text-align: left;
                border-right: 1px solid #ccc;
                li {
                    list-style-type: none;
                    min-height: 30px;
                    padding: 5px 10px 5px 20px;
                    border-bottom: 1px solid #ccc;
                    &:nth-child(0){
                        background: #ccc;
                    }
                }
            }
        }
        
        div.navCity {
            flex: 20%;
            text-align: center;
            ul {
                //width: 100%;
                text-align: center;
                margin: 0px;
                padding: 0px;
                li {
                    list-style-type: none;
                }
            }
        }
    }
 }
</style>
