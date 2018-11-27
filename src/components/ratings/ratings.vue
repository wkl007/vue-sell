<template>
  <div class="ratings">
    ratings
  </div>
</template>

<script>
  export default {
    name: 'ratings',
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
</style>
