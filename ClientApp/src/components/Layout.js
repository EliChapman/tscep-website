import React from 'react';
import { Container } from 'reactstrap';
import Footer from './Footer';
import NavMenu from './NavMenu';

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