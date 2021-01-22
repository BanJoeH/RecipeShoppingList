import React, { Component }from 'react';

class AddRecipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipeName: '',
            ingredient: '',
            ingredients: [],
            website: '',
        }
        
    }

    change = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    appendIngredients = (event) => {
        if (event.key ==='Enter') {
            this.setState(state => {
                const ingredients = state.ingredients.concat(state.ingredient);
            
                return {
                    ingredients,
                    ingredient: '',
                };
            });
        }
    };

    render() {
        return (
            <div className="fl w-100 w-80-ns pa2 tc">
                <h1>New Recipe</h1>
                <form>
                    <input 
                    name="recipeName"
                    placeholder="Recipe name" 
                    value={this.state.recipeName} 
                    onChange={event => this.change(event)}
                    />
                    <input 
                    name="ingredient"
                    placeholder="ingredient" 
                    value={this.state.ingredient} 
                    onChange={event => this.change(event)}
                    onKeyDown={event => this.appendIngredients(event)}
                    />
                    <input 
                    name="website"
                    placeholder="Website" 
                    value={this.state.website} 
                    onChange={event => this.change(event)}
                    />

                </form>
                {/* { if (this.state.ingredients.length > 0) {
                    <p>Ingredients</p>
                    }
                } */}
                
                <ul>
                    {this.state.ingredients.map((item, i) => (
                        <li key={'ingredient' + i}>{item}</li>
                        ))}
                </ul>
            </div>
        )
    }

}
export default AddRecipe;