<!--  -->
<template>
  <div class="">
    <button @click="btnClick()">按钮</button>
    <el-upload
      :action="uploadPath"
      :limit="5"
      multiple
      accept=".jpg,.jpeg,.png,.gif"
      list-type="picture-card"
    >
      <i class="el-icon-plus" />
    </el-upload>
  </div>
</template>

<script>
import request from "../untils/request";
import axios from "axios";

export default {
  name: "vvv",
  components: {},
  data() {
    return {
      uploadPath: "",
      id: "136DCD006054C14E_1",
      // id: 111,
    };
  },
  methods: {
    btnClick() {
      // request({
      //   url: "/wx/mqtt/deviceState",
      //   timeout: 5000,
      //   params: {
      //     deviceNum: this.id,
      //   },
      // });
      // .then((res) => console.log(res));
      // switch (111) {
      //   case 222:
      //     console.log(111);
      //     break;
      //   case 111:
      //     console.log(333);
      //     break;
      //   default:
      //     console.log("finally");
      // }

      var p = new Promise(function (resolve, reject) {
        var flag = false;
        if (flag) {
          resolve("这是数据1");
        } else {
          reject("这是数据2");
        }
      })
        .then((res) => {
          console.log(res);
          console.log("这是成功操作");
        })
        .catch((res) => {
          console.log(res);
          console.log("这是失败的操作");
          reject(res);
        });
    },
  },
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 145px;
  height: 145px;
  display: block;
}
</style>