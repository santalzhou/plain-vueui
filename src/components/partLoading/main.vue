<template>
  <div class="partloading_page">
    <slot></slot>
    <transition name="fade">
      <div class="loading_mask" @click.stop v-show="isShow">
        <div class="loading_block">
          <section class="bar_list">
            <span class="bar_item bar_one" :style="{backgroundColor: color}"></span>
            <span class="bar_item bar_two" :style="{backgroundColor: color}"></span>
            <span class="bar_item bar_three" :style="{backgroundColor: color}"></span>
            <span class="bar_item bar_four" :style="{backgroundColor: color}"></span>
            <span class="bar_item bar_five" :style="{backgroundColor: color}"></span>
          </section>
          <p class="loading_text">加载中...</p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "PartLoading",
  data() {
    return {};
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#56b5e9"
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/mixin.scss";
.partloading_page {
  position: relative;
  .loading_mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 2020;
    .loading_block {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .bar_list {
        @include wh(60px, 40px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .bar_item {
          float: left;
          @include wh(6px, 40px);
        }
        .bar_one {
          animation: stretch 1s 0.1s infinite;
        }
        .bar_two {
          animation: stretch 1s 0.2s infinite;
        }
        .bar_three {
          animation: stretch 1s 0.3s infinite;
        }
        .bar_four {
          animation: stretch 1s 0.4s infinite;
        }
        .bar_five {
          animation: stretch 1s 0.5s infinite;
        }

        @keyframes stretch {
          0% {
            height: 50px;
          }
          50% {
            height: 10px;
          }
          100% {
            height: 50px;
          }
        }
      }
      .loading_text {
        @include sc(12px, #898989);
        text-align: center;
        margin: 8px auto 0 auto;
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>