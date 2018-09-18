<template>
    <div class="me">
        <ul>
            <li>
                <a href="#">
                    我的电影券
                </a>
                <span>></span>
            </li>
            <li>
                <a href="#">
                    优惠券
                </a>
                <span>></span>
            </li>
            <li>
                <a href="#">
                    兑换券
                </a>
                <span>></span>
            </li>
            <li>
                帮助中心
                <span>></span>
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
    div.me {
        ul {
            padding: 0px;
            margin: 0px;
            text-align: left;
            li {
                list-style-type: none;
                margin: 10px;
                padding: 5px;
                border-bottom: 1px solid #aaa;
                //height: 50px;
                position: relative;
                span {
                    color: #aaa;
                    font-weight: 500;
                    position: absolute;
                    right: 10px;
                }
            }
        }
    }
    
</style>
