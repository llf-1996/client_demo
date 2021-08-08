<template>
  <el-container>
    <el-aside width="auto">
      <MyAside/>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import MyAside from '@/components/MyAside.vue'

export default {
  components: {
    MyAside
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  .el-aside {
    border: 1px solid red;
    min-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .el-main {
    color: #333;
  }
}
</style>
