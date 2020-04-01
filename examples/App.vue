<template>
  <div id="app" class="plain_wrap">
    <ul class="header_wrap">
      <li class="header_item">
        <router-link to="/slideTab">slideTab</router-link>
        <router-link to="/partLoading">partLoading</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "111"
    };
  },
  created() {
    // console.log("111");
  }
};
</script>

<style lang="scss">
.plain_wrap {
  margin: 0 auto;
  width: 1100px;
  .header_wrap {
    padding: 0 20px 10px;
    border-bottom: 1px solid #eaeaea;
    .header_item{
      list-style: none;
    }
  }
}
</style>
