import React, {Component} from 'react';
import RecipeCardList from '../components/RecipeCardList';
import Recipes from '../RecipesVar';

class AllRecipes extends Component {
  render (){
    return (
      <div className="all-recipes page">
        <div className="header">
          <h1>Все рецепты</h1>
        </div>
          <div className='recipelist'>
            <RecipeCardList recipes={Recipes} />
          </div>
      </div>
    );
}

}

export default AllRecipes;
