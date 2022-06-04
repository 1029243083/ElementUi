import Button from '@element/button';
import { shallowMount } from '@vue/test-utils';

describe('Button.vue', () => {
  let wrapper;
  let buttonEl;

  beforeEach(() => {
    wrapper = shallowMount(Button);
    buttonEl = wrapper.vm.$el;
  });

  it('create', () => {
    expect(buttonEl.classList).toContain('el-button');
  });

  it('size', async () => {
    await wrapper.setProps({
      size: 'mini',
    });
    expect(buttonEl.classList).toContain('el-button--mini');
  });

  it('plain', async () => {
    await wrapper.setProps({
      plain: true,
    });
    expect(buttonEl.classList).toContain('is-plain');
  });

  it('round', async () => {
    await wrapper.setProps({
      round: true,
    });
    expect(buttonEl.classList).toContain('is-round');
  });

  it('circle', async () => {
    await wrapper.setProps({
      circle: true,
    });
    expect(buttonEl.classList).toContain('is-circle');
  });

  it('type', async () => {
    await wrapper.setProps({
      type: 'primary',
    });
    expect(buttonEl.classList).toContain('el-button--primary');
  });

  it('disabled', async () => {
    await wrapper.setProps({
      disabled: true,
    });
    expect(buttonEl.classList).toContain('is-disabled');
  });

  it('loading', async () => {
    await wrapper.setProps({
      loading: true,
    });

    expect(wrapper.html()).toContain('<i class="el-icon-loading"></i>');
  });

  it('icon', async () => {
    await wrapper.setProps({
      icon: 'el-icon-edit',
    });

    expect(wrapper.html()).toContain('<i class="el-icon-edit"></i>');
  });

  it('native-type', async () => {
    await wrapper.setProps({
      nativeType: 'submit',
    });

    expect(wrapper.attributes('type')).toEqual('submit');
  });

  it('click', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
