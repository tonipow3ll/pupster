// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap'


import HomePage from './pages/HomePage'
import './App.css';

import DiscoverPage from './pages/DiscoverPage';
import SearchPage from './pages/SearchPage';
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Pupster App',
      headerLinks: [
        { title: 'Home', path: '/' },
 
        { title: 'Discover', path: '/discover' },
        { title: 'Search', path: '/search' }
      ],
      home: {
        title: 'Welcome to Pupster'
      },
      discover: {
        title: 'Discover Pupsters!'
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

          <Navbar className="border-bottom text-center" bg="transparent" expand="xl">
            <Navbar.Brand ><Link to="/" className="brand">Pupster</Link></Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
               
                <Link className="nav-link" to="/discover">Discover</Link>
                <Link className="nav-link" to="/search">Search</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>


          <Route path="/" exact render={() => <HomePage title={this.state.home.title}/>} />
          <Route path="/discover" exact render={() => <DiscoverPage title={this.state.discover.title}/>} />
          <Route path="/search" exact render={() => <SearchPage title={this.state.search.title}/>} />
        </Container>

        <Footer />

      </Router>

    );
  }
}

export default App;
