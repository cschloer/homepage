import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { SectionLink } from 'react-scroll-section';

import './header.css';
/*
<Link
  className="nav-link"
  to="projects"
>
*/

class Header extends Component {

  state = {
    isOpen: false,
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  renderSectionLink = (section) => {
    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
      <SectionLink section={section}>
        {({ onClick, isSelected }) => (
          <NavItem className={isSelected ? 'active' : null}>
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onClick();
              }}
              style={{ cursor: 'pointer' }}
            >
              {section}
            </a>
          </NavItem>
        )}
      </SectionLink>
    );
    /* eslint-enable jsx-a11y/anchor-is-valid */

  }

  render() {
    return (
      <Navbar
        color="inverse"
        light
        expand="md"
        className="navbarMedia"
        style={{
          right: 0,
          position: 'fixed',
          backgroundColor: 'white',
          zIndex: 1000,
          opacity: 0.9,
          borderBottomLeftRadius: '30px',
          borderLeft: '1px solid grey',
          borderBottom: '1px solid grey',
        }}
      >
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav
            className="ml-auto"
            navbar
            style={{ flexDirection: 'column' }}
          >
            {this.renderSectionLink('home')}
            {this.renderSectionLink('about me')}
            {this.renderSectionLink('skills')}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
};

Header.defaultProps = {
};

export default Header;
