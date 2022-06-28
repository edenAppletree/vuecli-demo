<template>
  <div>
   <h2>{{msg}}</h2>
   <button @click="clickFn">点击翻转</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
     msg:'Hello,World!!!'
    }
  },
  methods: {
    clickFn() {
      this.msg=this.msg.split('').reverse().join('')
    }
  }
}
</script>

<style>
</style>