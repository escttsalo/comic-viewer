import './App.css';
import React from 'react';

//components
import Navigation from './components/Navigation';

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

export default App;
