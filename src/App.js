import React from 'react'
import CardList from './CardList';
import AddRecipe from './AddRecipe';
import Recipes from './Recipes';

const App = () => {
    return (
        <div className="mw9 center ph3-ns">
            <div className="cf ph2-ns">
                <AddRecipe />
                <div className="fl w-50 w-10-ns pa2"></div>
                <CardList Recipes={Recipes}/>
                <div className="fl w-50 w-10-ns pa2"></div>
            </div>
        </div>
    )
   
}

export default App