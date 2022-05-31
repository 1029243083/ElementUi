<template>
  <div class="el-header" :style="{ height: height }">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
});
</script>
