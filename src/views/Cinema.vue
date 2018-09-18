<template>
    <div class="cinema">
        <ul>
            <li>
                <p class="cinemaName">
                    北京昌平保利影剧院
                    <span class="mode">4K厅</span>
                </p>
                <p class="address">
                    昌平区鼓楼街时代广场
                </p>
                <span class="seat">座</span>
                <span class="new">新人专享</span>
                <span class="price">18.8元起</span>
            </li>
            <li>
                <p class="cinemaName">北京昌平保利影剧院</p>
                <p class="address">昌平区鼓楼街时代广场</p>
                <span class="seat">座</span>
                <span class="new">新人专享</span>
                <span class="price">18.8元起</span>
            </li>
            <li>
                <p class="cinemaName">北京昌平保利影剧院</p>
                <p class="address">昌平区鼓楼街时代广场</p>
                <span class="seat">座</span>
                <span class="new">新人专享</span>
                <span class="price">18.8元起</span>
            </li>
            <li>
                <p class="cinemaName">北京昌平保利影剧院</p>
                <p class="address">昌平区鼓楼街时代广场</p>
                <span class="seat">座</span>
                <span class="new">新人专享</span>
                <span class="price">18.8元起</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="less">
    div.cinema {
        ul {
            display: flex;
            flex-direction: column;
            padding: 0px;
            margin: 0px;
            text-align: left;

            li {
                list-style-type: none;
                border-bottom: 1px solid #ccc;
                padding: 5px 10px;
                min-height: 100px;
                box-sizing: content-box;
                p {
                    margin-top: 5px;
                    margin-bottom: 10px;
                    span.mode {
                        color: #aaa;
                        border: 1px solid #aaa;
                        border-radius: 2px;
                    }
                }
                p.address {
                    line-height: height;
                    font-size: 12px;
                    color: #aaa;
                }
                span {
                    display: inline-block;
                    font-size:13px;
                    &.seat {
                        border: 1px solid #00b8f0;
                        color: #00b8f0;
                        border-radius: 2px;
                        padding: 0 1px;
                        margin: 0 1px;
                        line-height: 14px;
                    }
                    &.new {
                        color: #fff;
                        background: orange;
                        line-height: 14px;
                        margin: 0 1px;
                        padding: 1px;
                        font-weight: 400;
                        border-radius: 2px;
                        font-size: 12px;
                    }
                    &.price {
                        font-size: 12px;
                        color: #aaa;
                    }
                }
            }
        }
    }
</style>


