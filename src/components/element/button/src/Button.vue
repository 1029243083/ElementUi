<template>
  <button :autofocus="autofocus" :type="nativeType" class="el-button" @click="handleClick" :class="[
    type ? `el-button--${type}` : '',
    size ? `el-button--${size}` : '',
    plain ? `is-plain` : '',
    round ? `is-round` : '',
    circle ? `is-circle` : '',
    disabled ? `is-disabled` : '',
    // eslint-disable-next-line vuejs-accessibility/no-autofocus
  ]">
    <i :class="icon" v-if="icon && !loading"></i>
    <i class="el-icon-loading" v-if="loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>

  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElButton',
  props: {
    type: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: String,
    disabled: Boolean,
    loading: Boolean,
    size: String,
    autofocus: Boolean,
    nativeType: {
      type: String,
      default: 'button',
    },
  },
  setup(props, { emit }) {
    const handleClick = (e) => {
      emit('click', e);
    };
    return {
      handleClick,
    };
  },
});
</script>
