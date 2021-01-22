import React from 'react';


const Card = ({ id, name, ingredients, link }) => {

    return (
        <div className='bg-lightest-blue bw2 shadow-5 pa3 ma2 around fl w-100'>
            <h2 className='tc'>{name}</h2>
            <img src={`https://picsum.photos/id/${id}/200/200`} alt={name} className= 'fr' />
            <p>Ingredients</p>
            <ul>
                {
                    ingredients.map((_ingredient, i) => {
                        return (<li key= {'ingredient' + i} >{ingredients[i]}</li>);
                    })
                }
            </ul>
            <a href={link}>Link to recipe</a>
        </div>
    )
}
export default Card;