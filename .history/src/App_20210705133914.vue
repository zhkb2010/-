<!--  -->
<template>
  <div class="">
    <button @click="aaa()">请求</button>
  </div>
</template>

<script>
import getwxid from "./api/index";

export default {
  name: "PersonStatistics",
  components: {},
  data() {
    return {
      dww: { time: 111, data: 111 },
    };
  },
  created() {},
  methods: {
    //设置颜色选择框中颜色
    aaa() {
      let data = { time: 111 };
      getwxid(data).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style scoped>
.el-select ::v-deep.el-input {
  width: 80px;
}

.el-select-dropdown ::v-deep.el-scrollbar__wrap {
  width: 300px !important;
}
</style>
