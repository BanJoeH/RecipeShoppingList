import React from 'react';
import Card from './Card.js';

const Cardlist = ({ Recipes }) => {
  return(
    <div className="fl w-100 w-80-ns pa2">
      {
        Recipes.map((_recipe, i) =>{
          return  (
            <Card 
              key={'Recipe' + Recipes[i].id}
              id={Recipes[i].id} 
              name={Recipes[i].name} 
              img={Recipes[i].img} 
              ingredients={Recipes[i].ingredients} 
              link={Recipes[i].link}
            />
          );
        })
      }
    </div>
  );
}
export default Cardlist;

