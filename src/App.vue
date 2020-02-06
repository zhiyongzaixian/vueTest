<template>
  <div id="appContainer">
    <h1>App 组件</h1>
    <p>{{num}}</p>
  </div>


</template>

<script>
  export default {
    data(){
      return {
        num: 1
      }
    },
    beforeCreate(){
      // 组件实例生成以后，并且已经初始化了事件和所有的钩子函数
      // 组件实例没有进行数据劫持和代理
      console.log('--------- beforeCreate ----------');
      console.log(this);
      console.log(this.num); // 不能访问当前组件实例的数据data
      console.log(this.$el);
    },
    created(){
      // 组件实例进行了数据劫持和代理
      console.log('--------- created ----------');
      console.log(this.num);// 1. 有 2. 没有
      console.log(this.$el);

    },
    beforeMount(){
      console.log('--------- beforeMount ----------');
      console.log(this.num);
      console.log(this.$el);

    },
    mounted(){
      console.log('--------- mounted ----------');
      console.log(this.num);

      // $el在mounted可见， $el代表的编译完所有真实DOM片段
      console.log(this.$el);


      this.intervalId = setInterval(() => {
        console.log('interval');
        this.num++
      }, 1000)

      setTimeout(() => {
        // 销毁当前组件实例
        this.$destroy()
      }, 4000)

    },
    beforeUpdate(){
      // 数据发生改变，并且视图更新之前
      // 不止执行一次
      console.log('--------- beforeUpdate ----------');
    },
    updated(){
      // 数据发生改变，并且视图更新之后
      console.log('--------- updated ----------');
    },
    beforeDestroy(){
      // 实例没有销毁，实例完全可用
      console.log('--------- beforeDestroy ----------');
      console.log(this.num);
    },
    destroyed(){
      // destroyed执行的时候当前的组件还没有被彻底销毁
      // 实例销毁仅代表Vue的实例被销毁，但是页面还在， 只不过切断了实例(数据层)和页面(视图层)的关联
      console.log('--------- destroyed ----------');
      console.log(this.num);
      // 收尾工作： 关闭定时器
      clearInterval(this.intervalId)
    },
    // beforeCreate(){
    //   console.log('--------- beforeCreate ----------');
    // },
    // beforeCreate(){
    //   console.log('--------- beforeCreate ----------');
    // }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
