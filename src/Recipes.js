export const Recipes = [
    {
        id: 1,
        name: 'Lasagne',
        ingredients: ['Pasta sheets', 'Mince meat', 'Chopped tomatoes', 'onion', 'Garlic', 'Milk', 'Flour', 'Butter', 'Bay leaves', 'Carrot',],
        img: `https://picsum.photos/id/1/200/200`,
        link: '#',
    },
    {
        id: 2,
        name: 'Cauliflower mac n cheese',
        ingredients: ['Macaroni', 'Cheddar cheese', 'Cauliflower', 'Pancetta', 'Bread', 'Rosemary', 'Garlic', 'Creme fraiche', 'Parmesan', 'Salad', 'Basil', 'Dijon mustard', 'Yogurt', 'Red wine venegar', 'capers',],
        img: `https://picsum.photos/id/2/200/200`,
        link: '#',
    },
    {
        id: 3,
        name: 'Carbonara',
        ingredients: ['Bacon bits', 'Onion', 'Soya cream', 'Garlic', 'Pasta or Gnocchi'],
        img: `https://picsum.photos/id/3/200/200`,
        link: '#',
    },
    {
        id: 4,
        name: 'Veggie Chilli',
        ingredients: ['Kidney beans', 'Sweet potato', 'Mushrooms', 'Courgette', 'Onion', 'Garlic', 'Chopped tomatoes', 'Rice', 'Cumin',],
        img: `https://picsum.photos/id/4/200/200`,
        link: '#',
    },
    
]
//needs work
export function TRecipe(name, ingredient, ingredients, link) {
    Recipes.unshift({
        id : Recipes.length+1,
        name : name,
        ingredients : ingredients,
        link : link
    });
}

