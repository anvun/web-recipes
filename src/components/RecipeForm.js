import React from 'react'

const RecipeForm = () => {
    return (
        <div className="recipe-form-container">
            <div className="recipe-form-box">
                
                <form>
                    <span>Название</span>
                    <input type="text"/>
                    <span>Инградиенты</span>
                    <textarea />
                    <span>Этапы приготовления</span>
                    <textarea />
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default RecipeForm;