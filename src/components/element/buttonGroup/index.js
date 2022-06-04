import ButtonGroup from './src/ButtonGroup.vue';

ButtonGroup.install = (app) => {
  app.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;
