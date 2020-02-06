<template>
  <div>

  </div>
</template>

<script>
  export default {
    mounted(){
      // this代表的是组件的实例
      console.log(this.__proto__);
      // 组件实例的原型 == VM 组件的实例可以访问VM原型上的所有东西
      // this.$on('事件名', () => {
      //
      // })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
