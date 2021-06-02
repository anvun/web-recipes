import React, {Component} from 'react';


class RecipeCard extends Component {
    render(){
        const Recipe = this.props.recipe
        return(
            <div className='recipecard'>
                <div className="card-image">
                    <img className='img'
                        src="https://static.1000.menu/img/content-v2/69/74/51856/pankeiki-na-moloke-s-yaicom-sodoi-i-limonnoi-kislotoi_1614588187_8_max.jpg" 
                        alt="logo"/>
                </div>
                <div className='recipecard-container'>
                    <div className="card-content">
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

                        <div className='recipe-card_extend'/* у згорнутому варіанті даного блоку не має бути видно */>
                            <div className='recipe-card_ingredients'>
                                {Recipe.ingredients}
                            </div>
                            <div className='recipe-card_cooking'>
                                {Recipe.cooking}
                            </div>
                        </div>
                    </div>
                    <div className="card-like">
                        <button className='like' onClick={handleClick}>
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
function handleClick(){

}

export default RecipeCard;