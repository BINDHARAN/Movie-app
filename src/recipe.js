import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Recipe() {
    const recipeitems = [
        {
            id: "1000",
            picture:
                "https://www.cookingclassy.com/wp-content/uploads/2018/08/tandoori-chicken-11.jpg",
            name: "Chicken tandoori"
        },
        {
            id: "1001",
            picture:
                "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg",
            name: "Panner butter masala"
        },
        {
            id: "1002",
            picture:
                "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/8/1/original/Biryanifest.jpg",
            name: "Briyani"
        },
        {
            id: "1003",
            picture:
                "https://static.toiimg.com/thumb/64696930.cms?width=1200&height=900",
            name: "Parotta shawarma"
        }
    ];
    ;

    return (
        <div className="recipe-card-container">
            {recipeitems.map(({ picture, name }) =>
            (
                <RecipeList picture={picture} name={name} />
            )
            )}

        </div>

    )
}

function RecipeList({ picture, name }) {

    return (
        <div >
            <Card className="recipe-card">
                <CardMedia
                    component="img"
                    className="recipe-img"
                    image={picture}
                    alt="recipe img"
                />
                <CardContent>
                    <h2 className='recipe-cardtitle'>{name}</h2>
                </CardContent>
            </Card >
        </div>
    )
}










export default Recipe