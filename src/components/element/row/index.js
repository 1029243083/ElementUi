// eslint-disable-next-line import/extensions
import Row from './src/Row.js';

Row.install = (app) => {
  app.component(Row.name, Row);
};

export default Row;
