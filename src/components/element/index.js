import Row from './row';
import Col from './col';
import Container from './container';
import Header from './header';
import Main from './main';
import Aside from './aside';
import Footer from './footer';

const comArr = [Row, Col, Container, Header, Main, Aside, Footer];
const install = (app) => {
  comArr.forEach((com) => {
    app.component(com.name, com);
  });
};

export default {
  Row,
  Col,
  Container,
  Header,
  Main,
  Aside,
  Footer,
  install,
};

export {
  Row,
  Col,
  Container,
  Header,
  Main,
  Aside,
  Footer,
};
