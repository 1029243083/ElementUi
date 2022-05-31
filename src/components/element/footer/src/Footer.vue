<template>
  <div class="el-footer" :style="{ height: height }">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElFooter',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
});
</script>
