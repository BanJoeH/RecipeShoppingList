import React from 'react';
import Card from './Card.js';

class Cardlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
      
    }
    
    
    render() {
        return(
          <div className="fl w-100 w-80-ns pa2">
            {
              this.props.Recipes.map((_recipe, i) =>{
                return  (
                  <Card 
                    key={'Recipe' + this.props.Recipes[i].id}
                    id={this.props.Recipes[i].id} 
                    name={this.props.Recipes[i].name} 
                    img={this.props.Recipes[i].img} 
                    ingredients={this.props.Recipes[i].ingredients} 
                    link={this.props.Recipes[i].link}
                  />
                );
              })
            }
          </div>
        );
    }
}
export default Cardlist;

