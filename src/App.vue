<template>
  <div id="app">
    <v-header :seller="seller"/>
    <div class="tab-wrapper">
      <tab :tabs="tabs" :initialIndex="0"/>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import VHeader from '@/components/v-header/v-header'
import Tab from '@/components/tab/tab'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'
import ApiServer from '@/api'

export default {
  name: 'app',
  components: {
    VHeader,
    Tab,
  },
  computed: {
    tabs () {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller,
          },
        },
        {
          label: '评价',
          component: Ratings,
          data: {
            seller: this.seller,
          },
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller,
          },
        },
      ]
    },
  },
  data () {
    return {
      seller: {
        id: qs.parse(location.search.slice(1)).id,
      },
    }
  },
  created () {
    this._getSeller()
  },
  methods: {
    // 获取商家信息
    _getSeller () {
      const params = {
        id: this.seller.id,
      }
      ApiServer.getSeller(params).then(res => {
        this.seller = Object.assign({}, this.seller, res)
      }).catch(err => {})
    },
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/assets/stylus/base.styl"

#app
  .tab-wrapper
    position fixed
    top 136px
    left 0
    right 0
    bottom 0

</style>
