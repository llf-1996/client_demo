<template>
  <el-menu router unique-opened class="el-menu-vertical-demo" default-active="/chart/page1"
    @open="handleOpen" @close="handleClose">
    <el-submenu index="/chart">
      <template #title>
        <i class="el-icon-location"></i>
        <span>图表</span>
      </template>
      <el-menu-item index="/chart/page1">page1</el-menu-item>
      <el-menu-item index="/chart/page2">page2</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style lang="scss">
.el-menu-vertical-demo {
  // min-height: 400px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
