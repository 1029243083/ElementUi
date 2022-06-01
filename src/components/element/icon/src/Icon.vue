<template>
  <div :class="['el-icon', `el-icon-${name}`]"></div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElIcon',
  props: {
    name: String,
  },
});
</script>
