import React, { Component } from 'react'
import AddRecipe from './AddRecipe';
import CardList from './CardList';
import { Recipes } from './Recipes';

class App extends Component {
    constructor() {
        super();
        this.state = {
            recipes: Recipes,
        }
    }
    render() {
        return (
            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    <AddRecipe 
                    Recipes={this.state.recipes}
                    />
                    <div className="fl w-50 w-10-ns pa2"></div>
                    <CardList Recipes={this.state.recipes}/>
                    <div className="fl w-50 w-10-ns pa2"></div>
                </div>
            </div>
        )
    }
    
}

export default App