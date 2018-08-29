<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
    <div>
      <foot></foot>
    </div>
  </div>
</template>

<script>
import foot from './components/footer'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
