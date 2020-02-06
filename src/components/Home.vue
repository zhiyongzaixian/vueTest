<template>
  <div>
    <h2>Home 组件</h2>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg: '子组件的数据'
      }
    },
    props: ['test'],
    mounted(){
      console.log('mounted  home组件');
    },
    activated(){
      // 需要配合keep-alive使用
      // 当前组件激活状态，actived执行
      // 注意： 如果当前组件的数据要求是实时的，比如炒股软件，发送ajax请求就应该放在actived
      console.log('------ actived ------');
      this.aaa()
      // Home组件实例.test(Home组件实例.msg)
      this.test(this.msg)
    },
    deactivated(){
      // 需要配合keep-alive使用
      // 当前的缓存组件被缓存起来执行
      console.log('------ deactivated ------');
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
