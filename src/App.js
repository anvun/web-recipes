import React from 'react';
import Sidebar from './components/Sidebar';
import Search from './pages/Search';
import AllRecipes from './pages/AllRecipes';
import MyRecipes from './pages/MyRecipes';
import Favourites from './pages/Favourites';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/all-recipes" component={AllRecipes}/>
            <Route path="/my-recipes" component={MyRecipes}/>
            <Route path="/favourites" component={Favourites}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
