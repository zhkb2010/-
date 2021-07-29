<!--  -->
<template>
  <div class="">
    <router-link to="/test1" tag="button">测试1</router-link>
    <router-link to="/test2" tag="button">测试2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "PersonStatistics",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    //设置颜色选择框中颜色
    aaa() {
      this.$router.push("/vvv");
    },
  },
};
</script>
<style scoped>
</style>
