import React, { Component } from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

class App extends Component {

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
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Jumbotron>
          <Container>
              <Row>
                  <Col>
                      <h1>Welcome to React</h1>
                      <p>
                          <Button
                              tag="a"
                              color="success"
                              size="large"
                              href="http://reactstrap.github.io"
                              target="_blank"
                          >
                              View Reactstrap Docs
                          </Button>
                      </p>
                  </Col>
              </Row>
          </Container>
        </Jumbotron>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default App;
