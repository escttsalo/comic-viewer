import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';

//components
import Navigation from './components/Navigation';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//I'll explain later promise
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <section>
        <div>
          Home page
        </div>
      </section>
      <footer>
        Check
      </footer>
    </div>
  );
}