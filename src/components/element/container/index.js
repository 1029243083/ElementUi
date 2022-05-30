import Container from './src/Container.vue';

Container.install = (app) => {
  app.component(Container.name, Container);
};

export default Container;
