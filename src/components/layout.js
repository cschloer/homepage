import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import { ScrollingProvider } from 'react-scroll-section';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './header';

// todo https://react-scroll-section.netlify.com/docs-getting-started

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
            <ScrollingProvider>
              <Header />
              <div>
                <main>{this.props.children}</main>
              </div>
            </ScrollingProvider>
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
