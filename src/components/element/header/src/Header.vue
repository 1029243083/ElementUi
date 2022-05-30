<template>
  <div class="el-header">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElHeader',
});
</script>
