import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './index.css';
import 'bulma/css/bulma.min.css';

//components
import Navigation from './components/Navigation';
import Home from './components/Home';
<<<<<<< HEAD
import Footer from './components/Footer';
=======
import Profile from './components/Profile';
>>>>>>> 9eeb5c8 (start routes, routed current components, start new profile component)

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
    </div>
  );
}