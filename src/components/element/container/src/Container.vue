<template>
  <div :class="['el-container',{'is-vertical': isVertical}]">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'ElContainter',
  props: {
    direction: {
      type: String,
      validator: (val) => ['horizontal', 'vertical'].includes(val), // horizontal水平 vertical垂直
    },
  },
  setup(props, { slots }) {
    const isVertical = computed(() => {
      // 如果直接有vertical，就直接设置class【is-vertical】: true
      if (props.direction === 'vertical') {
        return true;
      } if (props.direction === 'horizontal') {
        return false;
      }
      // 如果插槽中有el-header或el-footer组件的话也设置class【is-vertical】: true
      if (slots && slots.default) {
        return slots.default().some((com) => {
          const { type } = com;
          if (typeof type === 'object') {
            // 判断为组件
            const { name } = type;
            if (name === 'ElHeader' || name === 'ElFooter') {
              return true;
            }
          }
          return false;
        });
      }
      return false;
    });
    return {
      isVertical,
    };
  },
});
</script>
