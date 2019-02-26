import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Header extends Component {

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="inverse" light expand="md">
        <Link className="navbar-brand" to="/">conrad schloer</Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link
                className="nav-link"
                to="projects"
              >
                projects
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                to="contact"
              >
                contact
              </Link>
            </NavItem>
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
