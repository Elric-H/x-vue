<template>
  <el-row class="header-nav">
    <el-col class="container hidden-md-and-down" :span="14" :offset="5">
      <div class="logo">
        <svg-icon iconClass="logo"></svg-icon>
        <span>优凸合联</span>
      </div>
      <top-list :data="data" @getNav="changeNav"></top-list>
    </el-col>
    <div class="mini-nav hidden-md-and-up">
      <div class="mini-logo">
        <svg-icon iconClass="logo"></svg-icon>
        <span>优凸合联</span>
      </div>
      <top-list :data="data" @getNav="changeNav"></top-list>
    </div>
  </el-row>
</template>
<script>
  import TopList from './components/TopList.vue'

  const list = [
    { index: '1', title: '首页', link: 'DefaultContent' },
    { index: '2', title: '业务介绍', children: [
      { index: '2-1', title: '问题介绍', link: 'News' },
      { index: '2-2', title: '解决方案', link: 'Program' },
      { index: '2-3', title: '市场分析', link: '' },
      { index: '2-4', title: '市场潜力', link: '' }
    ] },
    { index: '3', title: '公司团队', children: [
      { index: '3-1', title: '设计团队', link: '' },
      { index: '3-2', title: '开发团队', link: '' },
      { index: '3-3', title: '行政团队', link: '' }
    ] },
    { index: '4', title: '项目案例', link: '' },
    { index: '5', title: '联系我们', link: 'login' }
  ]

  export default {
    name: 'headerNav',
    components: {
      TopList
    },
    methods: {
      changeNav(nav) {
        this.$emit('changeView', nav)
      }
    },
    data() {
      return {
        data: list
      }
    }
  }
</script>
<style scoped lang="scss">
  .header-nav{
    position: fixed;
    z-index: 21;
    max-height: 60px;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: 1px solid #dadada;
    background-image: linear-gradient(#fff, #f1f1f1);
    .container{
      height: 60px;
      overflow: hidden;
      .logo{
        float: left;
        vertical-align: middle;
        font-size: 40px;
        margin-top: 5px;
        margin-left: 0px;
        padding: 0px;
        height: 50px;
        display: inline-block;
        box-sizing: border-box;
      }
      span{
        font-size: 25px;
      }

    }
    .mini-nav{
      height: 60px;
    }
    .mini-logo{
      float: none;
      margin: 0 auto;
      width: 150px;
      vertical-align: middle;
      font-size: 25px;
      padding: 0px;
      height: 50px;
      line-height: 60px;
      display: block;
    }
  }
</style>
