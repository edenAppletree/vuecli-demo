<template>
  <div @click="fatherFn">
    <!-- 语法:

   * @事件名.修饰符="methods里函数"
     * .stop - 阻止事件冒泡
     * .prevent - 阻止默认行为
     * .once - 程序运行期间, 只触发一次事件处理函数 -->
    <a @click.prevent :href="url">阻止跳转到百度的默认行为</a>
    <button @click.stop="btn">.stop阻止事件冒泡</button>
    <button @click.once="btn">.once程序运行期间, 只触发一次事件处理函数</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      url: "http://www.baidu.com",
    }
  },
  methods: {
    fatherFn() {
      console.log('father');
    },
    btn() {
      console.log('son');
    }
  }
}
</script>

<style>
</style>