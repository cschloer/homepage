import React, { Component } from 'react';
import fx from 'fireworks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Section } from 'react-scroll-section';
import kuchen from '../images/kuchen.jpeg';
import virus from '../images/virus.jpeg';

import Layout from '../components/layout';
import SEO from '../components/seo';
import RecipeImages from '../components/recipeImages';
import '../styles.css';
import { recipes } from '../misc/recipes';

class Kuchen extends Component {
  state = {
    viewport: {
      width: 0,
      height: 0,
    },
    selected: null,
    dropdownOpen: false,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    [...new Array(5)].forEach((_, i) => {
      setTimeout(() => {
        const range = n => [...new Array(n)];
        range(6 * (i + 1)).map(() =>
          fx({
            x: Math.random(window.innerWidth) * window.innerWidth * 0.8,
            y: Math.random(window.innerHeight) * window.innerHeight * 0.8,
            colors: ['#cc3333', '#4CAF50', '#81C784'],
          }),
        );
      }, i * 1000);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  toggle = () => {
    const { dropdownOpen } = this.state;
    this.setState({ dropdownOpen: !dropdownOpen });
  };

  updateWindowDimensions = () => {
    this.setState({
      viewport: { width: window.innerWidth, height: window.innerHeight },
    });
  };

  renderRecipe = (title, video, images, ingredients, directions) => {
    const { viewport } = this.state;
    return (
      <div
        id={title}
        style={{
          borderTop: '1px solid grey',
        }}
      >
        <h1>{title}</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 4 }}>
            {video ? (
              <div className="p-2">
                <video
                  height={viewport.height * 0.9}
                  loop
                  autoPlay
                  controls
                  muted
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ) : (
              <img
                src={images[0]}
                className="p-2"
                alt="recipe-image"
                style={{
                  height: viewport.height * 0.9,
                  overflow: 'hidden',
                }}
                resizeMode="contain"
              />
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 8 }}>
            <div style={{ display: 'flex', flexDirection: 'row', flex: 6 }}>
              <div className="ingredients">
                <h2>Ingredients!</h2>
                <ul>
                  {ingredients.map(ing => (
                    <li>{ing}</li>
                  ))}
                </ul>
              </div>
              {(images.length > 1 || (images.length > 0 && video)) && (
                <div
                  className="other-pictures pl-2"
                  style={{ height: viewport.height * 0.25 }}
                >
                  <RecipeImages
                    images={images.slice(video ? 0 : 1)}
                    viewport={viewport}
                  />
                </div>
              )}
            </div>
            <div className="directions" style={{ flex: 6 }}>
              <h2>Directions😋😋😋</h2>
              <ul>
                {directions.map(d => (
                  <li>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { selected, viewport, dropdownOpen } = this.state;
    let content = null;
    const recipe = recipes.reduce(
      (acc, r) => acc || (r.title === selected && r),
      null,
    );
    console.log('recipe', recipe);
    if (!recipe) {
      content = (
        <div>
          <SEO title="kuchen" keywords={['xaver', 'kuchen', 'birthday']} />
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
          <div>
            <h2 className="pl-2">
              Today, June 9 2020,{' '}
              <span style={{ fontSize: '3rem' }}>9 days after May 31 2020</span>
              , you, <span style={{ fontSize: '4rem' }}>Xaver Kandler</span>,
              enter your 26th year of life. It is with great love and happiness
              that we present to you{' '}
              <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                PART 2
              </span>{' '}
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
          </div>
        </div>
      );
    } else {
      content = this.renderRecipe(
        recipe.title,
        recipe.video,
        recipe.images,
        recipe.ingredients,
        recipe.directions,
      );
    }
    return (
      <div>
        <div className="fireWorkParticle" />
        <ButtonDropdown
          isOpen={dropdownOpen}
          toggle={this.toggle}
          direction="left"
          style={{
            position: 'abosolute',
            float: 'right',
          }}
          className="p-2"
        >
          <DropdownToggle
            caret
            style={{
              backgroundColor: 'pink',
              borderColor: 'pink',
              color: 'black',
            }}
          >
            {selected ? selected : 'Select a recipe!'}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              active={selected === null}
              onClick={() => this.setState({ selected: null })}
            >
              home
            </DropdownItem>
            {recipes.map(r => (
              <DropdownItem
                active={selected === r.title}
                onClick={() => this.setState({ selected: r.title })}
              >
                {r.title}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>

        {content}
      </div>
    );
    /*
        {recipes.map(r =>
        )}
        */
  }
}

export default Kuchen;
