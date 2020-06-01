import React, { Component } from 'react';
import fx from 'fireworks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Section } from 'react-scroll-section';
import kuchen from './kuchen.jpeg';
import virus from './virus.jpeg';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutMe from './aboutme';
import '../styles.css';
import { recipes } from './recipes';

class Kuchen extends Component {
  state = {
    viewport: {
      width: 0,
      height: 0,
    },
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    [...new Array(5)].forEach((_, i) => {
      setTimeout(() => {
        const range = n => [...new Array(n)];
        range(6 * (i + 1)).map(() =>
          fx({
            x: Math.random(window.innerWidth) * window.innerWidth,
            y: Math.random(window.innerWidth) * window.innerWidth,
            colors: ['#cc3333', '#4CAF50', '#81C784'],
          }),
        );
      }, i * 1000);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      viewport: { width: window.innerWidth, height: window.innerHeight },
    });
  };

  renderRecipe = (name, title, image, ingredients, directions) => {
    const { viewport } = this.state;
    return (
      <Section
        id={name}
        style={{
          width: viewport.width,
          minHeight: viewport.height,
          borderTop: '1px solid grey',
        }}
      >
        <div style={{ display: 'flex', flexAlign: 'row' }}>
          <img
            src={image}
            className="p-2"
            alt="recipe-image"
            style={{
              height: viewport.height / 2,
              overflow: 'hidden',
            }}
            resizeMode="contain"
          />
          <div className="ingredients">
            <h1>Ingredients!</h1>
            {ingredients.map(ing => (
              <p>{`- ${ing}`}</p>
            ))}
          </div>
        </div>
        testing
      </Section>
    );
  };

  render() {
    const { viewport } = this.state;
    return (
      <Layout sections={['top', ...recipes.map(r => r.name)]}>
        <SEO title="kuchen" keywords={['xaver', 'kuchen', 'birthday']} />
        <Section
          id="top"
          style={{
            width: viewport.width,
            height: viewport.height,
          }}
        >
          <div className="fireWorkParticle" />
          <Jumbotron
            style={{
              borderBottomRightRadius: '30px',
              borderBottomLeftRadius: '30px',
              backgroundColor: 'red',
            }}
          >
            <Container>
              <Row>
                <Col>
                  <h1 className="text-white">Cooking with Kuchen Pt2</h1>
                  <Row>
                    <img
                      src={kuchen}
                      className="blinking-medium"
                      alt="kuchen"
                      style={{
                        width: 150,
                        height: 150,
                        borderRadius: 150 / 2,
                        overflow: 'hidden',
                      }}
                    />
                    <h2 className="blinking my-auto px-3 text-white">
                      cooking with corona
                    </h2>
                    <img
                      src={virus}
                      alt="virus"
                      className="blinking-slow"
                      style={{
                        width: 150,
                        height: 150,
                        borderRadius: 150 / 2,
                        overflow: 'hidden',
                      }}
                    />
                    <h2 className="text-white">😋😋😋😋😋</h2>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
          <h2 className="pl-2">
            Today, June 9 2020,{' '}
            <span style={{ fontSize: '3rem' }}>9 days after May 31 2020</span>,{' '}
            you, <span style={{ fontSize: '4rem' }}>Xaver Kandler</span>, enter
            your 26th year of life. It is with great love and happiness that we
            present to you{' '}
            <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>PART 2</span>{' '}
            of Cooking With{' '}
            <span style={{ fontSize: '5rem', color: 'blue' }}>K</span>
            <span style={{ fontSize: '5rem', color: 'green' }}>U</span>
            <span style={{ fontSize: '5rem', color: 'pink' }}>C</span>
            <span style={{ fontSize: '5rem', color: 'red' }}>H</span>
            <span style={{ fontSize: '5rem', color: 'orange' }}>E</span>
            <span style={{ fontSize: '5rem', color: 'purple' }}>N</span>
          </h2>
          <br />
          <h1
            style={{
              fontSize: '5rem',
              color: 'pink',
              textAlign: 'center',
              width: '100%',
            }}
          >
            COOKING WITH CORONA
          </h1>
          <h2 style={{ color: 'pink', textAlign: 'center', width: '100%' }}>
            (featuring many months of isolation)
          </h2>
        </Section>
        {recipes.map(r =>
          this.renderRecipe(
            r.name,
            r.title,
            r.image,
            r.ingredients,
            r.directions,
          ),
        )}
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

export default Kuchen;
