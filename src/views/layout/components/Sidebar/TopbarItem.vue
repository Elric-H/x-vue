<template>
  <el-menu class="el-menu-demo"
           mode="horizontal"
           @select="handleSelect"
           default-active="0">
      <el-menu-item class="el-menu-item" v-for="item,index in rotues"
                    :key="index" :index="index.toString()">{{item.name}}
      </el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    name: 'TopbarItem',
    methods: {
      handleSelect(key) {
        const nav = this.rotues[key]
        this.$store.dispatch('NavSet', nav)
      }
    },
    computed: {
      rotues() {
        const list = []
        this.$router.options.routes.forEach(item => {
          if (!item.hidden && item.children) {
            list.push(item)
          }
        })
        return list
      }
    },
    created() {
      this.handleSelect(0)
    }
  }
</script>
<style scoped lang="scss">
  .el-menu-demo{
    float: left;
    height: 100%;
    border: none;
    padding-top: 6px;
    background-color: #0d5477;
    color: #fefefe;
    .el-menu-item{
      background-color: #0d5477;
      color: #fefefe !important;
    }
    .el-menu-item:hover{
      background-color: #0d5477;
      color: #fefefe !important;
    }
    .el-menu-item:focus{
      background-color: #0d5477;
      color: #fefefe !important;
    }
  }
  .el-menu--horizontal .el-menu .el-menu-item{
    float: left!important;
    font-size: 18px;
    padding:0px 20px;
  }
</style>
