import React from 'react';
import { Container } from 'reactstrap';
import Footer from './Footer/Footer';
import NavMenu from './NavMenu/NavMenu';

const Layout = (props) => {
  return (
    <div>
      <NavMenu />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;