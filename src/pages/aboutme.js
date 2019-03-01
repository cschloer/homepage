import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col,
  ListGroup, ListGroupItem,
} from 'reactstrap';

const proficient = [
  'Python',
  'JavaScript',
  'React',
  'React Native',
  'Flask',
  'SQL',
];

const experienced = [
  'Bash',
  'HTML/CSS',
  'Django',
  'Java',
];

const someexperience = [
  'MongoDB',
  'C',
  'PHP',
];


class AboutMe extends Component {

  renderList = (items) => {
    return (
      <ListGroup flush>
        {items.map((item, i) => (
          <ListGroupItem key={i}>
            {item}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }

  render() {
    return (
      <Container className="p-5">
        <Row>
          <Col>
            <h1>about me</h1>
            <p>I am a full stack software developer with extensive experience working with React and python</p>

          </Col>
        </Row>
        <Row>
          <Col>
            <h3>proficient</h3>
            {this.renderList(proficient)}
          </Col>
          <Col>
            <h3>experienced</h3>
            {this.renderList(experienced)}
          </Col>
          <Col>
            <h3>some experience</h3>
            {this.renderList(someexperience)}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
