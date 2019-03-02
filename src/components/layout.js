import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ScrollingProvider } from 'react-scroll-section';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header';

class Layout extends Component {

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
        render={() => (
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
};

export default Layout;
