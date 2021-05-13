import React from 'react';
import Sidebar from './components/Sidebar';
import AllRecipes from './pages/AllRecipes';
import MyRecipes from './pages/MyRecipes';
import Favourites from './pages/Favourites';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path="/all-recipes" component={AllRecipes}/>
          <Route path="/my-recipes" component={MyRecipes}/>
          <Route path="/favourites" component={Favourites}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
