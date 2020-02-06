<template>
  <div>
    <h1>App 组件</h1>
    <router-link to="/home">home 组件</router-link>
    <router-link to="/msite">msite 组件</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    mounted(){
      console.log(this.$router);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
