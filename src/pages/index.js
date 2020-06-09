import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Section } from 'react-scroll-section';
import headshot from '../images/headshot.jpg';
import bird from '../images/bird.jpg';
import vogel from '../images/vogel.jpeg';

class App extends Component {
  state = {
    viewport: {
      width: 0,
      height: 0,
    },
    choice: null,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      viewport: { width: window.innerWidth, height: window.innerHeight },
    });
  };

  render() {
    let choice = null;
    if (typeof localStorage !== 'undefined') {
      choice = localStorage.getItem('choice');
    }
    const { viewport } = this.state;
    return (
      <div style={{ height: '100vh', width: '100wh' }}>
        <div style={{ textAlign: 'center' }} className="py-4">
          <h1 className="blinking-home1">Welcome</h1>
        </div>
        <div style={{ textAlign: 'center' }} className="py-4">
          <h1 className="blinking-home2">to your gift</h1>
        </div>
        <div style={{ textAlign: 'center' }} className="py-4">
          <h1 className="blinking-home3">KUCHEN</h1>
        </div>

        <div className="d-flex flex-row text-center justify-content-center pt-5">
          <div
            className="gift1 justify-content-center blinking-fast"
            style={{ display: 'flex', flex: 6 }}
          >
            <a href="/kuchen" target="_blank">
              Click here to recieve your first gift
            </a>
          </div>

          <div
            className="gift2 justify-content-center flex-column"
            style={{ display: 'flex', flex: 6, alignItems: 'center' }}
          >
            {!choice && (
              <div>
                <h2>Second gift! Choose wisely...</h2>
                <div className="pt-4 d-flex flex-row justify-content-center">
                  <div className="pr-3">
                    <button
                      onClick={() => {
                        if (
                          typeof window !== 'undefined' &&
                          typeof localStorage !== 'undefined'
                        ) {
                          window.alert(
                            'You have chosen VOGEL! Your gift will arrive in a few months!',
                          );
                          localStorage.setItem('choice', 'vogel');
                        }
                        this.setState({ choice: 'vogel' });
                      }}
                      className="btn btn-secondary pr-2"
                    >
                      Vogel
                    </button>
                  </div>
                  <div className="pl-3">
                    <button
                      className="btn btn-secondary pl-2"
                      onClick={() => {
                        if (
                          typeof window !== 'undefined' &&
                          typeof localStorage !== 'undefined'
                        ) {
                          window.alert(
                            'You have chosen BIRD! Your gift will arrive in a few days or weeks!',
                          );
                          localStorage.setItem('choice', 'bird');
                        }
                        this.setState({ choice: 'bird' });
                      }}
                    >
                      Bird
                    </button>
                  </div>
                </div>
              </div>
            )}
            {choice === 'vogel' && (
              <img
                src={vogel}
                className="p-2"
                alt="vogel"
                style={{
                  height: '250px',
                  width: '250px',
                }}
              />
            )}
            {choice === 'bird' && (
              <img
                src={bird}
                className="p-2"
                alt="bird"
                style={{
                  height: '250px',
                  width: '250px',
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
