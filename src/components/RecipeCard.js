import React, {Component} from 'react';


class RecipeCard extends Component {
    render(){
        const Recipe = this.props.recipe
        return(
            <div className='recipecard'>
                <div className='recipecard-container'>
                    <img
                        className='img'
                        src="../../logo192.png" 
                        alt="logo"
                    />
                <div className='title'>
                    <h1>
                        {Recipe.title}
                    </h1>
                </div>
                <div className='category'>
                    <h2>
                        {Recipe.category}
                    </h2>
                </div>
                <div className='describing'>
                    <h3>
                        {Recipe.describing}
                    </h3>
                </div>
                <button className='like' onClick={handleClick}>
                    <i class="fas fa-heart"></i>
                </button>

                <div className='recipe-card_extend'/* у згорнутому варіанті даного блоку не має бути видно */>
                    <div className='recipe-card_ingredients'>
                        {Recipe.ingredients}
                    </div>
                    <div className='recipe-card_cooking'>
                        {Recipe.cooking}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
function handleClick(){

}

export default RecipeCard;
