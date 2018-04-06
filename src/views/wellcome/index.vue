<template>
    <div class="well-body">
      <header-nav @changeView="toggleView"></header-nav>
      <keep-alive>
        <default-content :is="currentView"></default-content>
      </keep-alive>
      <footer-nav></footer-nav>
    </div>
</template>
<script>
  import HeaderNav from './headerNav.vue'
  import FooterNav from './footerNav.vue'
  import DefaultContent from './components/DefaultContent.vue'
  import News from './components/News.vue'
  import Program from './components/Program.vue'

  export default {
    components: {
      DefaultContent,
      FooterNav,
      HeaderNav,
      News,
      Program
    },
    methods: {
      toggleView(view) {
        if (view === 'login') {
          this.$router.push('/login')
        }
        if (view) {
          this.currentView = view
        }
      }
    },
    data() {
      return {
        currentView: 'DefaultContent'
      }
    }
  }
</script>
<style scoped lang="scss">
  .well-body{
    color: #444;
    font-family: Microsoft YaHei, sans-serif;
    padding-top: 60px;
    overflow: hidden;

  }

</style>
