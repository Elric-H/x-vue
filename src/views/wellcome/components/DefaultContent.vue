<template>
  <div>
    <div class="content">
      <el-carousel height="400px" :interval="5000" arrow="always">
        <el-carousel-item :key="1">
          <img src="../../../assets/banner/1.jpg"/>
        </el-carousel-item>
        <el-carousel-item :key="2">
          <img src="../../../assets/banner/2.jpg"/>
        </el-carousel-item>
        <el-carousel-item :key="3">
          <img src="../../../assets/banner/3.jpg"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row class="inner-body gray">
      <el-col class="container" :span="14" :offset="5">
        <h3 class="center" style="font-weight: 400">核心竞争力</h3>
        <h5 class="center" style="margin-top:0">Core competitiveness</h5>
        <el-row style="margin-top: 40px" :gutter="40">
          <el-col :xs="24" :sm="24" :md="24" :lg="8">
            <img src="../../../assets/banner/wygl.jpg"/>
            <h4 class="center">产品价格</h4>
            <p>为电梯制造企业建立电梯物联网平台，并为新销售的电梯实现该功能。首次100台以内30万为电梯厂家搭建电梯物联网平台，并包括100台物联网终端模块；签订1000台的数量物联网终端模块价格为1500.00元/台。后期系统维护费8万-10万/年。</p>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="8">
            <img src="../../../assets/banner/jzgl.jpg"/>
            <h4 class="center">产品价值</h4>
            <p>产品本身采用复杂的智能算法，即使电梯设备运行频繁，每天所产生的流量费也是满足系统的要求，同时每月的流量费控制在3元/月/台，一年不超过36元/台，后期客户使用成本低。
            </p>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="8">
            <img src="../../../assets/banner/dzsw.jpg"/>
            <h4 class="center">物联网生态链</h4>
            <p>城市电梯（微信公众号）电梯维保时间/年检信息公示：公众通过扫描电梯二维码（平台生成的二维码）便可知道电梯维保时间以及电梯年检信息，包括 电梯的基本信息；关注该公众号即可报修和拨打应急救援人员的电话号码。
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="inner-body">
      <el-col class="container" :span="14" :offset="5">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24" :lg="8">
            <img src="../../../assets/banner/background.jpg"/>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="16">
            <h3 style="margin-bottom: 5px">企业目标 </h3>
            <p style="margin-top:0">Enterprise goal</p>
            <p>
              “电梯物联网”就是让每台电梯都可以通过数据说话:电梯运行次数、电梯运行时间、电梯故障、电梯困人报警、电梯保养提醒、电梯年检提醒等等。让电梯更加智能更加安全。<br>
              &nbsp;&nbsp;电梯物联网是采用互联网技术实现电梯运行状态进行实时数据采集，并将采集到的数据通过物联网技术上传至云端，电梯的运行状态一览无余。让电梯困人之类的现象在最短的时间得到处理。电梯的安全尽在掌握之中。
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="inner-body black" :gutter="40">
      <el-col :span="16" :offset="4">
        <el-col :xs="24" :sm="24" :md="24" :lg="8">
          <img class="team-Avatar" src="../../../assets/banner/lcw.jpg"/>
          <div class="team-content">
            <p class="team-title">董云富</p>
            <p class="team_keywords">创始人</p>
            <p class="team-detail">熟悉电梯行业，对电梯后市场有独到的见解。于2015年成立成都优凸合联科技有限公司，致力于电梯后市场的业务拓展。
            </p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8">
          <img class="team-Avatar" src="../../../assets/banner/wyz.jpg"/>
          <div class="team-content">
            <p class="team-title">邓建军</p>
            <p class="team_keywords">硬件工程师</p>
            <p class="team-detail">致力于物联网领域20年，熟悉物联网硬件性能，在算法以及CPU模块的程序方面有独到的成就。
            </p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8">
          <img class="team-Avatar" src="../../../assets/banner/jcw.jpg"/>
          <div class="team-content">
            <p class="team-title">尹仁泉</p>
            <p class="team_keywords">软件工程师</p>
            <p class="team-detail">理学硕士，十多年IT从业经验，参与主导过多个大型信息化系统和互联网项目开发，精通JavaEE、移动应用开发和大数据及商务智能等架构及技术实现。
            </p>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'DefaultContent',
    data() {
      return {}
    }
  }
</script>
<style scoped lang="scss">
  .inner-body {
    padding: 70px 0px;
    p {
      color: #848484;
      font-size: 13px;
      line-height: 24px;
      overflow: hidden;
      width: 100%;
      margin-top: 10px;
    }
  }
  .container{
    img{
      height:200px;
      max-width: 100%;
      margin: 0 auto;
      display: block;
      vertical-align: middle;
    }
  }
  .introduce{
    object-fit:cover;
    height: 200px;
  }
  .team-content{
    min-height: 220px;
    padding: 30px 30px 10px;
    margin-bottom: 20px;
    background-color: #fefefe;
    .team-title{
      font-size: 20px;
      color: #474747;
      margin: 0 0 11px;
    }
    .team_keywords{
      color: #a5a5a5;
      font-size: 14px;
      margin: 0 0 11px;
    }
    .team-detail{
      font-size: 13px;
      max-height: 90px;
      overflow: hidden;
      color: #848484;
      margin: 0 0 11px;
    }
  }
  .team-Avatar{
    height: 220px;
    width: 100%;
    max-height: 220px;
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
