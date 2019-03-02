import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col,
  Jumbotron,
} from 'reactstrap';
import { Section } from 'react-scroll-section';
import headshot from './headshot.jpg';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutMe from './aboutme';

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
          }}
        >
          <Jumbotron
            style={{
              borderBottomRightRadius: '30px',
              borderBottomLeftRadius: '30px',
            }}
          >
            <Container>
              <Row>
                <Col>
                  <h1>conrad schloer</h1>
                  <Row>
                    <img
                      src={headshot}
                      alt="headshot"
                      style={{
                        width: 150,
                        height: 150,
                        borderRadius: 150 / 2,
                        overflow: 'hidden',
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
            minHeight: viewport.height,
            borderTop: '1px solid grey',
          }}
        >
          <AboutMe />
        </Section>
        <Section
          id="skills"
          style={{
            width: viewport.width,
            minHeight: viewport.height,
            borderTop: '1px solid grey',
          }}
        >
          <Container className="p-5">
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
