import Header from './src/Header.vue';

Header.install = (app) => {
  app.component(Header.name, Header);
};

export default Header;
