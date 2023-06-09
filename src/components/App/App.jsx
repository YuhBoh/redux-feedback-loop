import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Feedback from '../Feedback/Feedback';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
          <Route exact path="/"> 
          {/* exact path = if you go exactly to "/", will only render Feeling */}
            <Feeling/>
          </Route>

          <Route exact path="/understanding">
            <Understanding/>
          </Route>

          <Route exact path="/support">
            <Support/>
          </Route>

          <Route exact path="/comments">
            <Comments/>
          </Route>

          <Route exact path="/review">
            <Review/>
          </Route>

          <Route exact path="/feedback">
            <Feedback/>
          </Route>
      </Router>
    
    </div>
  );
}

export default App;
