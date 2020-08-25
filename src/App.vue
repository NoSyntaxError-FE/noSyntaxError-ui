<template>
  <div class="box">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      console.log('dom加载完成')
    },
    data() {
      return {
        msg: '这是首页'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    font-size: 100px;
    height: 100vh;
    background-color: #cecece;
  }
</style>
