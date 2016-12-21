import React, { Component } from 'react'
import './App.css'
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'
import Header from './routers/Header.jsx'
import Home from './routers/Home.jsx'
import Api from './routers/Api.jsx'
import Contact from './routers/Contact.jsx'
import Footer from './routers/footer/Footer.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">               
        <div className="">          
          {/*Menu de las rutas*/}
          <Router history={browserHistory}>
            <Route path="/" component={Header}>
              <IndexRoute component={Home} />
              <Route path="home" component={Home} />
              <Route path="Api" component={Api} />
              <Route path="contact" component={Contact} />
            </Route>
          </Router>               
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
