import Row from './row';
import Col from './col';

const comArr = [Row, Col];

const install = (app) => {
  comArr.forEach((com) => {
    app.component(com.name, com);
  });
};

export default { Row, Col, install };

export { Row, Col };
