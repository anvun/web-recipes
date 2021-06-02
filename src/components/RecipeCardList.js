import React, {Component} from 'react'
import RecipeCard from "./RecipeCard";

 class RecipeCardList extends Component{

    render() {
        const recipeElements = this.props.recipes.map((recipe)=>
            <li key={recipe.id} className="recipe-list">
                <RecipeCard recipe={recipe} />
            </li>
        )
        return(
            <ul>
                {recipeElements}
            </ul>
        )
    }
 }


export default RecipeCardList