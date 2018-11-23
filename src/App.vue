<template>
  <div id="app">
    <v-header :seller="seller"/>
  </div>
</template>

<script>
  import VHeader from 'components/v-header/v-header'
  import ApiServer from 'api'

  export default {
    name: 'app',
    components: {
      VHeader,
    },
    data () {
      return {
        seller: {},
      }
    },
    created () {
      this._getSeller()
    },
    methods: {
      // 获取商家信息
      _getSeller () {
        ApiServer.getSeller().then(res => {
          this.seller = Object.assign({}, this.seller, res)
        }).catch(err => {})
      },
    },
  }
</script>
<style lang="stylus">
</style>
