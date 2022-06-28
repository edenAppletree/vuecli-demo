<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>{{obj.name}}</h2>
    <h2>{{obj.age>18? '大可爱':'小可爱'}}</h2>
    <h2>{{obj.sex}}</h2>

  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:'今天是农历五月三十',
      obj:{
        name:'小猪佩奇',
        age:3,
        sex:'unknown'
      }
    }
  }

}
</script>

<style>

</style>