<template>
  <div class="container">
    {{ msg }}
    <Loading></Loading>
  </div>
</template>

<script>
  import Loading from './components/Loading'
  import './base.scss'
  export default {
    name: 'App',
    components: { Loading },
    data() {
      return {
        show: false,
        msg: '这是首页'
      }
    }
  }
</script>
