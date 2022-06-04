import Row from './row';
import Col from './col';
import Container from './container';
import Header from './header';
import Main from './main';
import Aside from './aside';
import Footer from './footer';
import Icon from './icon';
import Button from './button';
import ButtonGroup from './buttonGroup';

const comArr = [Row, Col, Container, Header, Main, Aside, Footer, Icon, Button, ButtonGroup];
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
  Icon,
  Button,
  install,
  ButtonGroup,
};

export {
  Row, Col, Container, Header, Main, Aside, Footer, Icon, Button, ButtonGroup,
};
