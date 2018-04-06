<template>
  <div class="navlist">
    <el-menu default-active="1" class="hidden-md-and-down" mode="horizontal">
      <template v-for="item in data">
        <el-submenu v-if="item.children&&item.children.length>0"
                    :index="item.index"
                    :key="item.index">
          <template slot="title">{{item.title}}</template>
          <a v-for=" child in item.children" @click="clickNav(child.link)"
                       :key="child.index">
            <el-menu-item :index="child.index">{{child.title}}</el-menu-item>
          </a>
        </el-submenu>
        <a v-else :key="item.index" @click="clickNav(item.link)">
          <el-menu-item :index="item.index">{{item.title}}</el-menu-item>
        </a>
      </template>

    </el-menu>
    <el-button class="mini-icon hidden-md-and-up" type="text" @click="isActive = !isActive">
      <svg-icon v-show="!isActive" iconClass="nav-list"></svg-icon>
      <svg-icon v-show="isActive" iconClass="close"></svg-icon>
    </el-button>
    <div>
      <div class="collapse-nav" :class="{'is-active':isActive}">
        <ul class="nav-list">
          <template v-for="item in data">
            <li v-if="item.children&&item.children.length>0"
                        :index="item.index"
                        :key="item.index">
              <el-collapse>
                <el-collapse-item class="no-border-collapse" :title="item.title" name="1">
                  <li v-for=" child in item.children" :key="child.index">
                    <a @click="clickNav(child.link)">
                      {{child.title}}
                    </a>
                  </li>
                </el-collapse-item>
              </el-collapse>
            </li>
              <li v-else :index="item.index">
                <a :key="item.index" @click="clickNav(item.link)">
                  {{item.title}}
                </a>
              </li>

          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import SvgIcon from '../../../components/SvgIcon/index.vue'

  export default {
    name: 'TopList',
    components: {
      SvgIcon
    },
    props: {
      data: {
        type: Array,
        required: true
      }
    },
    methods: {
      clickNav(link) {
        this.$emit('getNav', link)
      }
    },
    data() {
      return {
        isActive: false

      }
    }
  }
</script>
<style scoped lang="scss">
  .navlist {
    height: 60px;
    float: right !important;
    padding-left: 0;
    margin-bottom: 0;
    .el-menu {
      background-color: inherit;
    }
    .mini-icon {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 20px;
      color: #76838f;
      height: 60px;
      margin-right: 10px;
    }

    .collapse-nav {
      display: block;
      overflow-y: scroll;
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
      border-color: #e4eaec;
      max-height: 0px;
      padding-right: 15px;
      padding-left: 15px;
      overflow-x: visible;
      position: absolute;
      top: 60px;
      left: 0px;
      right: 0px;
      background-color: #fefefe;
      transition: max-height .3s ease-out;
      .nav-list {
        list-style-type: none;
        margin-right: 0;
        margin: 11px -15px;
        padding-left: 0;
        li {
          margin-left: 0px !important;
          a {
            display: block;
            padding: 10px 15px;
            line-height: 20px;
            color: #696969;
          }
        }
      }
    }

    @-webkit-keyframes collapse-list {
      0% {
        transform: scale(1, 0);
      }
      100% {
        transform: scale(1, 1);
      }
    }

    .collapse-nav.is-active {
      max-height: 200px;
      -webkit-animation: collapse-list .2s ease-in;
      transition: max-height .3s ease-in;
      transform-origin: 50% 0;
    }
  }

  .hidden-md-and-down {
    a {
      float: left;
      display: inline-block;
      .el-menu-item {
        height: 60px;
        line-height: 60px;
        border-bottom: 2px solid transparent;
        color: #909399;
      }
      .el-menu-item.is-active {
        border-bottom: 2px solid #409EFF;
        color: #303133;
      }
      .el-menu-item:focus {
        background-color: inherit;
      }
      .el-menu-item:hover {
        background-color: #fff;
      }
    }
  }

  .el-collapse {
    border: none;
    .collapse-item{

    }
  }
</style>
