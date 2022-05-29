import {
  defineComponent, getCurrentInstance, computed, h,
} from 'vue';

export default defineComponent({
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    tag: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    let { parent } = getCurrentInstance();

    const gutter = computed(() => {
      while (parent && parent.type.name !== 'ElRow') {
        parent = parent.parent;
      }
      return parent ? parent.props.gutter : 0;
    });

    const style = computed(() => {
      const styleCss = {};
      if (gutter.value) {
        styleCss.paddingLeft = `${gutter.value / 2}px`;
        styleCss.paddingRight = styleCss.paddingLeft;
      }
      return styleCss;
    });

    const classList = computed(() => {
      const list = [];
      ['span', 'offset', 'push', 'pull'].forEach((item) => {
        if (props[item] !== 0) {
          list.push(item === 'span' ? `el-col-${props[item]}` : `el-col-${item}-${props[item]}`);
        }
      });

      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof props[size] === 'number') {
          list.push(`el-col-${size}-${props[size]}`);
        } else if (typeof props[size] === 'object') {
          console.log(props[size]);
          // el-col-sx-offset-6
          // el-col-sx-6
          const p = Object.keys(props[size]); // 获取对象的key;
          p.forEach((item) => {
            // item=offset size=xs
            list.push(
              item === 'span'
                ? `el-col-${size}-${props[size][item]}`
                : `el-col-${size}-${item}-${props[size][item]}`,
            );
          });
        }
      });
      return list;
    });
    return () => h(
      props.tag,
      {
        style: style.value,
        class: ['el-col', classList.value],
      },
      slots.default && slots.default(),
    );
  },
});
