<!--  -->
<template>
  <div class="aaa">
    <el-select
      ref="colorSelect"
      placeholder=""
      v-model="myColor"
      @change="handleChange()"
    >
      <el-option
        v-for="item in wxColors"
        :key="item.value"
        label=" "
        :value="item.value"
        v-html="
          '<div style=background-color:' +
          item.color +
          ';width:' +
          '100%' +
          ';height:' +
          '100%' +
          '></div>'
        "
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { debounce } from "../untils/aaa";

export default {
  name: "test1www",
  components: {},
  data() {
    return {
      wxColors: [
        { value: "COLOR010", color: "#63B359" },
        { value: "COLOR020", color: "#2C9F67" },
        { value: "COLOR030", color: "#509FC9" },
        { value: "COLOR040", color: "#5885CF" },
        { value: "COLOR050", color: "#9062C0" },
        { value: "COLOR060", color: "#D09A45" },
        { value: "COLOR070", color: "#E48138" },
        { value: "COLOR080", color: "#EE903C" },
        { value: "COLOR090", color: "#DD6549" },
        { value: "COLOR100", color: "#CC463D" },
      ],
      myColor: "",
    };
  },
  methods: {
    handleChange() {
      let dom = this.$refs.colorSelect;
      let color = this.wxColors.filter((v) => v.value == this.myColor)[0].color;
      if (dom) {
        dom = dom.$el.children[0];
        let inputDom = dom.querySelectorAll(".el-input__inner");
        inputDom[0].style["background-color"] = color;
        // console.log(inputDom);
        // inputDom[0].style["background-color"] = color;
      }
    },
  },
};
</script>
<style>
.aaa {
  margin: 100px 100px;
}

.bbb {
  height: 100px;
  width: 200px;
  border: 1px solid red;
}

.ccc {
  height: 20px;
  width: 60px;
  background-color: red;
  border: 1px solid red;
  margin-left: 50px;
  margin: 0 10px;
}

.aaa {
  display: inline-block;
  position: absolute;
}

.el-input {
  width: 80px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0 30px 0 10px;
}

.el-input__inner {
  border: none;
}

.el-select-dropdown__list {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
}

.el-select-dropdown__item {
  width: 20%;
  padding: 0 10px;
  margin: 5px 0;
}
</style>