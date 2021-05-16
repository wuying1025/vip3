<template>
  <div>
    <h1>子页面二</h1>
    <h1>{{ msg }}</h1>
    <baidu-map class="map" center="哈尔滨">
      <bm-overview-map
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :isOpen="true"
      ></bm-overview-map>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  created() {
    this.msg = this.$route.query.school;
  },
};
</script>
<style scoped>
.map {
  width: 100%;
  height: 700px;
}
</style>