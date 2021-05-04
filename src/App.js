// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomePage from './pages/HomePage'
import './App.css';
import AboutPage from './pages/AboutPage';
import DiscoverPage from './pages/DiscoverPage';
import SearchPage from './pages/SearchPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Pupster App',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Discover', path: '/discover' },
        { title: 'Search', path: '/search' }
      ],
      home: {
        title: 'Welcome to Pupster'
      },
      about: {
        title: 'About Pupster'
      },
      discover: {
        title: 'Disover Pupsters!'
      },
      search: {
        title: 'Search for Pupsters!'
      }
    }
  }


  render() {
    return (
      <Router>
        <Container fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Pupster</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            {/* <Navbar.Collapse id="navbar-toggle"> */}
            <Nav className="ml-auto">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/Discover">Discover</Link>
                <Link className="nav-link" to="/Search">Search</Link>
              </Nav>

            </Nav>

          </Navbar>


          <Route path="/" exact render={() => <HomePage title={this.state.home.title}/>} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>} />
          <Route path="/discover" exact render={() => <DiscoverPage title={this.state.discover.title}/>} />
          <Route path="/search" exact render={() => <SearchPage title={this.state.search.title}/>} />
        </Container>
      </Router>
    );
  }
}

export default App;
