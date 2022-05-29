import Col from '@element/col';
import { shallowMount } from '@vue/test-utils';

describe('Col.vue', () => {
  let wrapper;
  let rowEle;
  beforeEach(() => {
    wrapper = shallowMount(Col);
    rowEle = wrapper.vm.$el;
  });
  it('create', () => {
    expect(rowEle.classList).toContain('el-col');
  });

  it('span', async () => {
    await wrapper.setProps({ span: 12 });
    expect(rowEle.classList).toContain('el-col-12');
  });

  it('offset', async () => {
    await wrapper.setProps({ offset: 6 });
    expect(rowEle.classList).toContain('el-col-offset-6');
  });

  it('push', async () => {
    await wrapper.setProps({ push: 6 });
    expect(rowEle.classList).toContain('el-col-push-6');
  });

  it('pull', async () => {
    await wrapper.setProps({ pull: 6 });
    expect(rowEle.classList).toContain('el-col-pull-6');
  });

  it('tag', async () => {
    await wrapper.setProps({ tag: 'h1' });
    expect(wrapper.vm.$props.tag).toContain('h1');
  });

  it('respnsive', async () => {
    await wrapper.setProps({
      sm: { span: 4, offset: 4 },
      md: 4,
      lg: { span: 6, offset: 2 },
    });
    expect(rowEle.classList).toContain('el-col-sm-4');
    expect(rowEle.classList).toContain('el-col-sm-offset-4');
    expect(rowEle.classList).toContain('el-col-md-4');
    expect(rowEle.classList).toContain('el-col-lg-6');
    expect(rowEle.classList).toContain('el-col-lg-offset-2');
  });
});
