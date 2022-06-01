<template>
  <div class="box">
      <el-icon name="loading"></el-icon>
      <i class="el-icon-edit"></i>
  </div>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
