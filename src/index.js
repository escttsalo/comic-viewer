import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './index.css';
import 'bulma/css/bulma.min.css';

//components
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './components/Profile';

import { Box, Modal } from 'react-bulma-components'; //eslint-disable-line

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

//App is being declared here in case of any helper functions in the future. e.g. auth
function App() {
  const [showModal, toggleModal] = useState('card'); //eslint-disable-line


  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>

      <Switch>
        <Route path='/profile' component={Profile}/>
        <Route path='/home' component={Home}/>

        <Route path='/'>
          <Redirect to='/home'/>
        </Route>
      </Switch>

      <Footer />
      {/* <Modal show={showModal === 'card'} showClose={false} onClose={() => toggleModal()}>
        <Modal.Content>
          <Box backgroundColor='warning'>
            I'm here now!
          </Box>
        </Modal.Content>
      </Modal> */}
    </div>
  );
}