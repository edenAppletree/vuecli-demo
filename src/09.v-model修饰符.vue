<template>
  <div>
    <!-- 语法:
   * v-model.修饰符="vue数据变量"
     * .number   以parseFloat转成数字类型
     * .trim          去除首尾空白字符
     * .lazy           在change时触发而非inupt时 -->
    <div>
      <span>年龄:</span>
      <input type="text" v-model.number="age">
    </div>
    <div>
      <span>人生格言:</span>
      <input type="text" v-model.trim="motto">
    </div>
    <div>
      <span>自我介绍:</span>
      <textarea v-model.lazy="intro"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      age: '',
      motto: '',
      intro: ''
    }
  }

}
</script>

<style>
</style>