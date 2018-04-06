<template>
    <el-row class="nav-container">
      <breadcrumb></breadcrumb>
    </el-row>
</template>
<script>
  import Breadcrumb from '@/components/Breadcrumb'
  export default {
    name: 'BreadNav',
    components: {
      Breadcrumb
    },
    data() {
      return {}
    }
  }
</script>
<style scoped>
  .nav-container{
    height: 36px;
    padding: 10px 16px;
    background-color: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  }
</style>
