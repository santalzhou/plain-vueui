<template>
  <div class="slideTab_page">
    <div class="list_scroller" ref="scrollWrap">
      <section class="data_list" ref="scrollInner">
        <div
          class="data_item"
          v-for="(item, idx) in length"
          :key="idx"
          :style="{borderBottom: idx == activeIdx? '3px solid '+color: 'none'}"
          @click="changeTab(idx)"
        >
          <slot :name="'slide'+idx"></slot>
        </div>
      </section>
    </div>
    <div class="nav_btn next_btn" @click.prevent="nextItem" v-if="showNavBtn">
      <span class="iconfont">&#xe81d;</span>
    </div>
    <div class="nav_btn prev_btn" @click.prevent="prevItem" v-if="showNavBtn">
      <span class="iconfont">&#xe600;</span>
    </div>
  </div>
</template>

<script>
import "../../static/iconfont/iconfont.css";
import { setTimeout, clearTimeout } from "timers";
export default {
  name: 'SlideTab',
  data() {
    return {
      outerWidth: 0,
      scrollWidth: 0,
      scrollOffsetLeft: 0,
      showNavBtn: false,
      timer: null,
      itemWidth: 200,
      activeIdx: 0
    };
  },
  props: {
    length: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: "#fbacde"
    },
    activeIndex: {
      type: [String, Number],
      default: 0
    }
  },
  watch: {
      activeIndex(val){
          this.activeIdx = val
      }
  },
  methods: {
    nextItem() {
      this.scrollOffsetLeft = this.$refs.scrollInner.offsetLeft;
      if (this.scrollWidth > this.outerWidth) {
        if (
          this.scrollWidth - Math.abs(this.scrollOffsetLeft) >
          this.itemWidth + this.outerWidth
        ) {
          this.$refs.scrollInner.style.left =
            -(Math.abs(this.scrollOffsetLeft) + this.itemWidth) + "px";
        } else {
          this.$refs.scrollInner.style.left =
            -(this.scrollWidth - this.outerWidth) + "px";
        }
      }
    },

    prevItem() {
      this.scrollOffsetLeft = this.$refs.scrollInner.offsetLeft;
      if (this.scrollWidth > this.outerWidth) {
        if (Math.abs(this.scrollOffsetLeft) > this.itemWidth) {
          this.$refs.scrollInner.style.left =
            -(Math.abs(this.scrollOffsetLeft) - this.itemWidth) + "px";
        } else {
          this.$refs.scrollInner.style.left = 0;
        }
      }
    },

    initWidth() {
      if (!this.timer) {
        this.timer = setTimeout(() => {
          if (this.$refs.scrollInner && this.$refs.scrollInner.clientWidth) {
            this.scrollWidth = this.$refs.scrollInner.clientWidth;
            this.outerWidth = this.$refs.scrollWrap.clientWidth;
            this.scrollOffsetLeft = this.$refs.scrollInner.offsetLeft;
            this.showNavBtn = this.scrollWidth > this.outerWidth ? true : false;
          }
          this.timer = null;
        }, 200);
      }
    },

    changeTab(index) {
        this.activeIdx = index;
      this.$emit("change", index);
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.initWidth();
      if (this.$refs.scrollInner.firstChild) {
        this.itemWidth = this.$refs.scrollInner.firstChild.clientWidth;
        this.$refs.scrollWrap.style.height =
          this.$refs.scrollInner.clientHeight + "px";
      }
    });
    window.addEventListener("resize", this.initWidth);
    this.$once("hook:beforeDestroy", function() {      
      clearTimeout(this.timer);
      window.removeEventListener("resize", this.initWidth);
    });
  }
};
</script>

<style scoped lang="scss">
@import "../../style/mixin.scss";
.slideTab_page {
  position: relative;
  padding: 0 40px;
  .nav_btn {
    position: absolute;
    top: 0;
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .iconfont{
        @include sc(24px, #c0c0c0);
        cursor: pointer;
    }
  }
  .prev_btn {
    left: 0;
  }
  .next_btn {
    right: 0;
  }
  .list_scroller {
    position: relative;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0;
    min-height: 30px;
    // box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    .data_list {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      box-sizing: border-box;
      transition: left 0.3s;
      .data_item {
        flex: 1;
        box-sizing: border-box;
        min-width: 100px;
        overflow: hidden;
      }
    }
  }
}
</style>