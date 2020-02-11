<template>
  <div class="tab">
    <cube-tab-bar
      class="border-bottom-1px"
      ref="tabBar"
      :data="tabs"
      showSlider
      :useTransition="false"
      v-model="selectedLabel"
    />
    <div class="slider-wrapper">
      <cube-slide
        ref="slide"
        :loop="false"
        :auto-play="false"
        :show-dots="false"
        :initial-index="index"
        :options="slideOptions"
        @scroll="onScroll"
        @change="onChange"
      >
        <cube-slide-item
          v-for="(tab,index) in tabs"
          :key="index"
        >
          <!--动态组件-->
          <component
            ref="component"
            :is="tab.component"
            :data="tab.data"
          />
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    tabs: {
      type: Array,
      default () {
        return []
      },
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    selectedLabel: {
      get () {
        return this.tabs[this.index].label
      },
      set (newVal) {
        this.index = this.tabs.findIndex((value) => {
          return value.label === newVal
        })
      },
    },
  },
  data () {
    return {
      index: this.initialIndex,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0,
      },
    }
  },
  mounted () {
    this.onChange(this.index)
  },
  methods: {
    onScroll (pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const transform = -pos.x / slideWidth * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
    },
    onChange (current) {
      this.index = current
      const instance = this.$refs.component[current]
      if (instance && instance.fetch) {
        instance.fetch()
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/stylus/variable"

  .tab
    display flex
    flex-direction column
    height 100%

    >>> .cube-tab
      padding 10px 0

    .slider-wrapper
      flex 1
      overflow: hidden
</style>
