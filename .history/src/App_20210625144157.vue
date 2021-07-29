<!--  -->
<template>
  <div class="">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="选择时间"
              v-model="ruleForm.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "PersonStatistics",
  components: {},
  data() {
    return {
      tableDataGroup: [
        {
          ids: 111,
          name: "培养方案111",
          year: 2020,
          className: 11,
          table: [
            {
              id: 1,
              name: "通识课4",
              tableList: [
                {
                  id: "021548",
                  tech: "信息工程",
                  type: 1,
                  teacher: "王老师",
                  class: "专业方向1",
                },
                {
                  id: "021549",
                  tech: "软件工程",
                  type: 2,
                  teacher: "孙老师",
                  class: "专业方向2",
                },
                {
                  id: "021550",
                  tech: "软件工程",
                  type: 1,
                  teacher: "李老师",
                  class: "专业方向1",
                },
                {
                  id: "021551",
                  tech: "软件工程",
                  type: 1,
                  teacher: "张老师",
                  class: "专业方向2",
                },
              ],
            },
          ],
        },
        {
          ids: 222,
          name: "培养方案222",
          year: 2021,
          className: 12,
          table: [
            {
              id: 1,
              name: "专业基础课4",
              tableList: [
                {
                  id: "021548",
                  tech: "软件工程",
                  type: 1,
                  teacher: "王老师",
                  class: "专业方向1",
                },
                {
                  id: "021549",
                  tech: "通信工程",
                  type: 2,
                  teacher: "孙老师",
                  class: "专业方向2",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>