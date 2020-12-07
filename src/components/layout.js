import React from "react";
import PropTypes from "prop-types";
import { Content, Footer } from '../styles/components';
import Header from "./header";

const Layout = ({ children }) => (
    <>
      <Header />
      <Content>
        <main>{children}</main>
        <Footer>
          hecho con <span role='img' aria-label='emoji'>💛</span> por 
          {` `}
          <a href="https://github.com/sueherrera30">sue Herrera</a>
        </Footer>
      </Content>
    </>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
