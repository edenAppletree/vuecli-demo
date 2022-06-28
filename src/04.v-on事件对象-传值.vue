<template>
  <div>
   <!-- 1. 事件触发, 无传值, 可以直接获取事件对象
    2. 事件触发, 传值, 需要手动传入$event -->
    <!-- 阻止默认事件 传值 -->
    <a @click="one" :href="url">阻止跳转到百度</a>
    <hr><hr>
    <a @click="two(1,$event)" :href="url">阻止跳转到百度</a>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      url:"http://www.baidu.com",
    }
  },
  methods: {
    one(e) {// 1. 事件触发, 无传值, 可以直接获取事件对象
      e.preventDefault()
    },
    two(val,e) { // 2. 事件触发, 传值, 需要手动传入$event
      console.log(val);
      e.preventDefault()
    }
  }
}
</script>

<style>
</style>