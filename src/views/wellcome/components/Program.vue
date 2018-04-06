<template>
  <el-row class="inner-body">
    <el-col class="container" :span="16" :offset="4">
      <el-row :gutter="20">

        <el-col :xs="24" :sm="24" :md="24" :lg="16">
          <h3 style="margin-bottom: 5px">方案一：
          </h3>
          <p>
            电梯物联网终端对接电梯控制系统/协议转接板，实时获取电梯运行和故障报警信息，完成电梯应急报警、对讲、电梯故障数据归集功能；
          </p>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8">
          <img src="../../../assets/banner/program.png"/>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
          <h3 style="margin-bottom: 5px">方案二：
          </h3>
          <p>
            通过独立安装于电梯轿厢内的多组传感器采集电梯运行状态数据，通过嵌入式微处理器对电梯运营状态及故障做在线实时分析，经由GPRS模块将电梯运行数据传输至服务器平台，实现电梯运行状态记录、故障识别、实时报警、困人救援等安全监控功能。同时经由电梯运营安全监控系统采集的电梯运营数据，可用于电梯日常管理、维保记录、维保提醒、工况评估、隐患防范等功能。
            电梯管理系统通过安装的传感器设备，一旦发生困人故障，电梯运营安全监控系统向监控中心发出实时警报，并同时向电梯维保人员微信推送该台电梯故障信息。
            完全使用独立传感器实现电梯运营数据采集，与电梯及电梯控制系统之间无任何电气连接，确保不会干扰电梯的正常运营，亦不会因电梯本身的故障而影响到电梯运营安全监控系统的安全监控功能。所以直接适用于所有品牌的垂直升降电梯。
          </p>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: 'Program',
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
