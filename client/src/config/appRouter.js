import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Home from '../routes/Home';
import Starred from '../routes/Starred';
import NotFound from '../routes/NotFound';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const AppRouter = () => (
  <Router>
    <Container>
      <Row>
        <Col>
          <Header />
          <NavBar />
          <Switch>
            <Route path={['/', '/home']} exact component={Home} />
            <Route path="/starred" exact component={Starred} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Col>
      </Row>
    </Container>
  </Router>
);

export default AppRouter;
