import React from "react";
import MainPage from './Components/Screens/MainPage/MainPage';
import HowToUsePage from './Components/Screens/HowToUsePage/HowToUsePage';
import GameFirstPage from './Components/Screens/GamePage/GameFirstPage';
import GameLandingPage from './Components/Screens/GamePage/GameLandingPage';
import RankPage from './Components/Screens/RankPage/RankPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MainPage }></Route>
        <Route exact path="/how-to-use" component={ HowToUsePage }></Route>
        <Route exact path="/game-start" component={ GameFirstPage }></Route>
        <Route exact path="/game-landing" component={ GameLandingPage }></Route>
        <Route exact path="/rank" component={ RankPage }></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
