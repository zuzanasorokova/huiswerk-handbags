import React from "react";

function Product({collection, image, name, price }){
    return (
        <article>
            <span>{collection}</span>
            <img src={image} alt={name}/>
            <p>{name}</p>
            <h4>{price}</h4>
        </article>
    )
}

export default Product