<template>
  <div>
    <!-- 语法:
   * v-model.修饰符="vue数据变量"
     * .number   以parseFloat转成数字类型
     * .trim          去除首尾空白字符
     * .lazy           在change时触发而非inupt时 -->
    <div>
      <span>年龄:</span>
      <input type="text" :value="val" @input="getval">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      val: ''
    }
  },
  methods: {
    getval(e) {// 事件输入过程中 实时拿到dom input里的value
      this.val = e.target.value
    }
  }

}
</script>

<style>
</style>