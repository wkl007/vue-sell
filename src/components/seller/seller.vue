<template>
  <div class="seller">
    seller
  </div>
</template>

<script>
  export default {
    name: 'seller',
    props: {
      data: Object,
      default () {
        return {}
      },
    },
  }
</script>
<style lang="stylus" scoped>
  @import "~assets/stylus/variable"
  @import "~assets/stylus/mixin"

  .seller
    height 100%
    text-align right
</style>
