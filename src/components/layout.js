import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { ScrollingProvider } from "react-scroll-section";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header";

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
              <Header sections={this.props.sections} />
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

Layout.defaultProps = {
  sections: ["home", "about me", "skills"]
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sections: PropTypes.array
};

export default Layout;
