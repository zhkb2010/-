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
      colorList: [
        "#63B458",
        "#2C9F66",
        "#509FC8",
        "#5786CF",
        "#8F62BF",
        "#D09945",
        "#E3B138",
        "#EF903C",
        "#F09039",
        "#CA473D",
      ],
      ruleForm: {
        region: "",
      },
      rules: {
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
      },
    };
  },
  created() {},
  methods: {
    //设置颜色选择框中颜色
    setSelectColor(color) {
      //通过操作dom节点改变样式
      this.$nextTick(() => {
        let dom = this.$refs.colorSelect;
        if (dom) {
          dom = dom.$el.children[0];
          let inputDom = dom.querySelectorAll(".el-input__inner");
          let icon = dom.querySelectorAll(".el-input__icon");
          inputDom[0].style["background-color"] = color;
          icon[0].style["color"] = "black";
        }
      });
    },
    handleChange(val) {
      this.setSelectColor(val);
      //触发update事件更新父组件绑定值
      this.$emit("update", val);
    },
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
