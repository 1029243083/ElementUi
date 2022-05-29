import { defineComponent, computed, h } from 'vue';

export default defineComponent({
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
    },
    justify: {
      type: String,
      default: 'start',
      validator(value) {
        return ['start', 'end', 'center', 'space-around', 'space-between'].includes(value);
      },
    },
    align: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].includes(value);
      },
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const style = computed(() => {
      const styleCss = {};
      if (props.gutter) {
        styleCss.marginLeft = `${-props.gutter / 2}px`;
        styleCss.marginRight = styleCss.marginLeft;
      }
      return styleCss;
    });
    return () => h(
      props.tag,
      {
        style: style.value,
        class: [
          'el-row',
          { 'el-row--flex': props.type === 'flex' },
          props.justify !== 'start' && `is-justify-${props.justify}`,
          props.align !== 'top' && `is-align-${props.align}`,
        ],
      },
      slots.default(),
    );
  },
});
