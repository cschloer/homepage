import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col,
  Jumbotron,
} from 'reactstrap';
import { Section } from 'react-scroll-section';

import Layout from '../components/layout';
import SEO from '../components/seo';

class App extends Component {

  state = {
    viewport: {
      width: 0,
      height: 0,
    },
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ viewport: { width: window.innerWidth, height: window.innerHeight } });
  }

  render() {
    const { viewport } = this.state;
    return (
      <Layout>
        <SEO title="conrad schloer" keywords={['conrad', 'schloer']} />
        <Section
          id="home"
          style={{
            width: viewport.width,
            height: viewport.height,
            backgroundColor: 'blue',
          }}
        >
          <Jumbotron>
            <Container>
              <Row>
                <Col>
                  <h1>conrad schloer</h1>
                  <Row>
                    <img
                      src="/static/profilepic.jpg"
                      alt="headshot"
                      style={{
                        width: 150,
                        height: 150,
                        borderRadius: 150 / 2,
                        overflow: 'hidden',
                        borderWidth: 3,
                        borderColor: 'red',
                      }}
                    />
                    {' '}{' '}
                    <h2 className="my-auto pl-3">freelance software developer</h2>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </Section>
        <Section
          id="about me"
          style={{
            width: viewport.width,
            height: viewport.height,
            backgroundColor: 'green',
          }}
        >
          <Container>
            <Row>
              <Col>
                <h1>about me</h1>
                <p>I am a dveloper dapiubs ac facaikuslt morbi leo risus</p>

              </Col>
            </Row>
          </Container>
        </Section>
        <Section
          id="skills"
          style={{
            width: viewport.width,
            height: viewport.height,
            backgroundColor: 'pink',
          }}
        >
          <Container>
            <Row>
              <Col>
                <h1>skills</h1>
                <p>- javascript</p>

              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    );
  }
}

export default App;
