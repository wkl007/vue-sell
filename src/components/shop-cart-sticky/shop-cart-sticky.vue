<template>
  <div class="shop-cart-sticky" v-show="visible">
    <shop-cart
      ref="shopCart"
      :selectFoods="selectFoods"
      :deliveryPrice="deliveryPrice"
      :minPrice="minPrice"
      :fold="fold"
      sticky
    />
  </div>
</template>

<script>
  import ShopCart from 'components/shop-cart/shop-cart'
  import popupMixin from 'utils/mixins/popup'

  export default {
    name: 'shop-cart-sticky',
    mixins: [popupMixin],
    components: {
      ShopCart,
    },
    props: {
      selectFoods: {
        type: Array,
        default () {
          return []
        },
      },
      deliveryPrice: {
        type: Number,
        default: 0,
      },
      minPrice: {
        type: Number,
        default: 0,
      },
      fold: {
        type: Boolean,
        default: true,
      },
      list: {
        type: Object,
        default () {
          return {}
        },
      },
    },
    methods: {
      drop (el) {
        this.$refs.shopCart.drop(el)
      },
    },
  }
</script>
<style lang="stylus" scoped>

  .shop-cart-sticky
    position absolute
    left 0
    bottom 0
    z-index 999
    width 100%
    height 48px
</style>
