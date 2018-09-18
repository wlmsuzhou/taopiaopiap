<template>
    <div class="foot">
        <ul>
            <li>
                <router-link to="/">
                    <div>
                        <img  v-show="route !== '/'" src="../assets/images/hno.svg" alt="">
                        <img  v-show="route === '/'" src="../assets/images/hok.svg" alt="">
                        <div class="nav">电影</div>
                    </div>
                </router-link>
                
            </li>
            <li>
                <router-link to="cinema">
                    <div>
                        <img v-show="route !== '/cinema'" src="../assets/images/mno.svg" alt="">
                        <img v-show="route === '/cinema'" src="../assets/images/mok.svg" alt="">
                        <div class="nav">影院</div>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/me">
                    <div>
                        <img v-show="route !== '/me'" src="../assets/images/eno.svg" alt="">
                        <img v-show="route === '/me'" src="../assets/images/eok.svg" alt="">
                        <div class="nav">我的</div>
                    </div>
                </router-link>
                
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        route() {
            return this.$route.path;
        }
    },
    mounted() {
        console.log(this.route);
    }
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
    a {
        text-decoration: none;
        color: #aaa;
    }
</style>
