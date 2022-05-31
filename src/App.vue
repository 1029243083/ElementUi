<template>
  <div class="box">
    <el-container>
      <el-header height="100px">header</el-header>
      <el-main>main</el-main>
    </el-container>
    <br />
    <hr />
    <br />
    <el-container>
      <el-header>header</el-header>
      <el-main>main</el-main>
      <el-footer>footer</el-footer>
    </el-container>
    <br />
    <hr />
    <br />
    <el-container>
      <el-aside>Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    <br />
    <hr />
    <br />
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <br />
    <hr />
    <br />
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
    <br />
    <hr />
    <br />
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <br />
    <hr />
    <br />
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <br />
    <hr />
    <br />
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
