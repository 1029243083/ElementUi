/* eslint-disable no-unused-vars */
import Row from '@element/row';
import { shallowMount } from '@vue/test-utils';

describe('Row.vue', () => {
  let wrapper;
  let rowEle;
  beforeEach(() => {
    wrapper = shallowMount(Row);
    rowEle = wrapper.vm.$el;
  });
  it('create', () => {
    expect(rowEle.classList).toContain('el-row');
  });
  it('gutter', async () => {
    await wrapper.setProps({ gutter: 20 });
    expect(rowEle.style.marginLeft).toBe('-10px');
    expect(rowEle.style.marginRight).toBe('-10px');
  });

  it('type', async () => {
    await wrapper.setProps({ type: 'flex' });
    expect(rowEle.classList).toContain('el-row--flex');
  });

  it('justify', async () => {
    await wrapper.setProps({ justify: 'end' });
    expect(rowEle.classList).toContain('is-justify-end');
  });

  it('align', async () => {
    await wrapper.setProps({ align: 'bottom' });
    expect(rowEle.classList).toContain('is-align-bottom');
  });
});
