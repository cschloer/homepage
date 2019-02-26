import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"

import Header from './header';


class Layout extends Component {

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
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header />
            <div>
              <main>{this.props.children}</main>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
