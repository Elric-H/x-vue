<template>
  <el-row class="inner-body">
    <el-col class="container" :span="16" :offset="4">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24" :lg="8">
          <img src="../../../assets/banner/background.jpg"/>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="16">
          <h3 style="margin-bottom: 5px">解决的问题 </h3>
          <p>
            1.为电梯市场监管单位提供电梯运行数据：<br/>
            电梯故障报警、电梯困人报警、电梯应急救援、电梯保养是否超期、电梯年检是否超期等。<br/>
            2.为电梯制造/维保企业提供电梯运行数据：<br/>
            电梯运行次数、电梯运行时间、电梯故障分析、电梯保养/年检时间自动提醒、电梯一梯一档云端存储等。<br/>
            3.电梯故障自动报警、电梯困人故障自动报警、建立电梯档案等。<br/>
            为电梯使用/管理单位提供电梯运行数据：<br/>
            4.电梯保养周期、电梯使用合格标志、电梯信息公示等。<br/>
            为公众提供电梯运行数据<br/>
          </p>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: 'News',
    data() {
      return {}
    }
  }
</script>
<style scoped lang="scss">
  .inner-body {
    min-height: calc(100vh - 220px);
    padding: 70px 0px;
  }
  img{
    height:200px;
    max-width: 100%;
    margin: 0 auto;
    display: block;
    vertical-align: middle;
  }
  p{
    font-size: 14px;
    line-height: 2;
    font-weight: 400;
    color: #a6a7aa;
    margin-bottom: 15px;
  }
</style>
