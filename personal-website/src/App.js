import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Neel Saswade',
      headerLinks: [
        {title: 'Home', paths: '/'},
        {title: 'About', paths: '/about'},
        {title: 'Contact', paths: '/contact'},
      ],
      home: {
        title: 'Designer and Engineer',
        subTitle: 'Solving problems with user-centric web products.',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return(
      
      <Router>
        <Container className="p-0 text-white " fluid={true}>
          <Navbar bg="transparent" expand="lg">
            <Navbar.Brand className="text-white">Neel Saswade</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link text-white" to="/">Home</Link>
                <Link className="nav-link text-white" to="/about">About</Link>
                <Link className="nav-link text-white" to="/contact">Contact</Link>

              </Nav>
           </Navbar.Collapse>
          </Navbar>


          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
          <Route path="/about"  render={() => <AboutPage title={this.state.about.title}/>} />
          <Route path="/contact"  render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />
        </Container>

      </Router>
    );
  }
}

export default App;
