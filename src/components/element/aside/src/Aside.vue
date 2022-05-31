<template>
  <div class="el-aside" :style="{ width: width }">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
});
</script>
