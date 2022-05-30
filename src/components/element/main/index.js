import Main from './src/Main.vue';

Main.install = (app) => {
  app.component(Main.name, Main);
};

export default Main;
