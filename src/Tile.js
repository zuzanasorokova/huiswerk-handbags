import React from "react"

function Tile({image, title, children}) {
    if(image) {
        return (
            <section>
                <img src={image} alt={title}/>
            </section>
        )
    } else {
        return (
           <section>
               <h2>{title}</h2>
               {children}
           </section>
        )
    }
}

export default Tile