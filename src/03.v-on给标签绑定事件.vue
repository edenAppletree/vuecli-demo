<template>
  <div>
    <!-- 作用: 给标签绑定事件
   * 语法
     * v-on:事件名="要执行的==少量代码=="
     * v-on:事件名="methods中的函数"
     * v-on:事件名="methods中的函数(实参)" 
     * @事件名="methods中的函数"
   * 简写: @事件名="methods中的函数" -->
    <p>你要购买商品的数量: {{ count }}</p>
    <button v-on:click="addNum">+1</button>
    <button v-on:click="addNum1(5)">+5</button>
    <button @click="subNum">-1</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addNum() {
      this.count++
    },
    addNum1(val) {
      this.count += val
    },
    subNum() {
      this.count--
    }
  }
}
</script>

<style>
</style>