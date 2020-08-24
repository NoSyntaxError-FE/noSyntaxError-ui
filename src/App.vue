<template>
  <div class="box">
    {{ name }}
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        name: 'lcf'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    height: 100vh;
    background-color: #cecece;
  }
</style>
