import React from 'react';
import Footer from './Footer/Footer';
import NavMenu from './NavMenu/NavMenu';
import { Container } from 'reactstrap';

const Layout = (props) => {
  return (
    <div id="page">
      <NavMenu />
        <Container className='content'>
          {props.children}
        </Container>
      <Footer />
    </div>
  );
}

export default Layout;