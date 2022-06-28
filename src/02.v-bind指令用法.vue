<template>
  <div>
    <!-- 2. 值 -> 标签原生属性上 -->
    <!-- 语法: v-bind:原生属性名="vue变量" -->
    <a v-bind:href="urlBD">点击去百度</a>
    <img :src="imgUrl" >
    <img :src="imgUrlLocal" >

  </div>
</template>

<script>
// 本地图片需引入
import localImg from './assets/logo.png'
export default {
  data() {
    return {
      urlBD:'http://www.baidu.com',
      imgUrl:"http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg",
      imgUrlLocal:localImg
    }
  }

}
</script>

<style>

</style>