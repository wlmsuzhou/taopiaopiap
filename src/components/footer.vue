<template>
    <div class="foot">
        <ul>
            <li>
                <img  src="../assets/images/hno.svg" alt="">
                <div>电影</div>
            </li>
            <li>
                <img src="../assets/images/mno.svg" alt="">
                <div>影院</div>
            </li>
            <li>
                <img src="../assets/images/eno.svg" alt="">
                <div>我的</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less">
    div.foot {
        background: #fff;
        position: fixed;
        width: 100%;
        height: 80px;
        padding-top: 10px;
        bottom: 0px;
        left: 0px;
        box-sizing: border-box;
        border-top: 1px solid #ccc;
        ul {
            margin: 0px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 5px 20px;
            li {
                list-style: none;
            }
        }
    }
</style>
