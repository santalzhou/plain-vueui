<template>
  <div class="pl_page">
    <h3 class="pl_title">partLoading 区域加载</h3>
    <p>可以在更新局部内容时显示的加载，比如于页面有多个echart实例，更新单个图例数据时</p>
    <br>
     <span class="btn" @click="isShow = isShow ? false: true">点击{{isShow? '关闭':'显示'}}加载</span>
     <br>
     <br>
    <div class="text-wrap"> 
      <part-loading :isShow="isShow" color="#56b5e9">
        <p class="text">
          这里会显示正在加载，这里会显示正在加载，
          这里会显示正在加载，
          这里会显示正在加载，
          这里会显示正在加载，这里会显示正在加载，这里会显示正在加载，
          这里会显示正在加载，这里会显示正在加载，这里会显示正在加载，
          这里会显示正在加载，这里会显示正在加载，这里会显示正在加载，
        </p>
      </part-loading>
    </div>

    <div class="right-wrap"> 
      <part-loading :isShow="isShow" color="#f323f3">
        <p class="text">
          这里会显示正在加载，这里会显示正在加载，
          这里会显示正在加载，
          这里会显示正在加载，
          这里会显示正在加载，这里会显示正在加载，这里会显示正在加载，
          这里会显示正在加载，这里会显示正在加载，这里会显示正在加载，
          这里会显示正在加载，这里会显示正在加载，这里会显示正在加载，
        </p>
      </part-loading>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  created() {},

  methods: {
  }
};
</script>

<style lang="scss">
.pl_page {
  color: #565656;
  .pl_title {
    font-weight: normal;
  }
  .btn{
    display: inline-block;
    padding: 3px 8px;
    border: 1px solid #aaa;
    border-radius: 4px;
    cursor: pointer;
    
  }
  .text-wrap {
    float: left;
    width: 320px;
    border: 1px solid #aaa;
    .text{
      padding: 0;
      margin: 0;
    }
  }
  .right-wrap{
    float: left;
    margin-left: 40px;
    width: 500px;
    border: 1px solid #aaa;
  }
}
</style>
