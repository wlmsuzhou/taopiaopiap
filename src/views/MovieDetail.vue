<template>
    <div class="detail">
        <iscroll-view ref="iscroll" :options="{preventDefault: false}" @pullUp="load" @pullDown="refresh" @scrollStart="log"> 
            <div v-for="li in testNumber">
                <p>{{li}}</p>
            </div>
        </iscroll-view>
        <button @click="scrollToTop()">scroll to top</button>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            testNumber: 10
        }
    },
    methods: {
        scrollToTop() {
            //debugger
            let iscroll = this.$refs.iscroll;
            console.log(iscroll);
            window.scrollTo(0,0);
            iscroll.refresh();
        },
        load() {
            console.log('up');
        },
        refresh() {
            console.log('down');
        },
        log(iscroll) {
            this.testNumber+=20;
            //iscroll.refresh();
        }
    }
}
</script>
<style lang="less">
    .detail {
        margin-bottom: 100px;
    }
</style>

