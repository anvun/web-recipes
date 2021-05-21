import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';
import RecipeForm from '../components/RecipeForm'

const MyRecipes = () => {
  const {auth, firestore} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <div className="my-recipes page">
      <div className="header">
        <h1>Мои рецепты</h1>
        {/* Открыть форму RecipeForm по нажатию */}
        <button onClick="">+</button> 
      </div>
      <div className="cards">
        
      </div>
      <RecipeForm></RecipeForm>
    </div>
  );
}

export default MyRecipes;
