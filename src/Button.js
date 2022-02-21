import React from "react";

function Button({buttonName, disabled}){
    return(
        <button type="button" disabled={disabled} onClick={() =>console.log({buttonName})}>{buttonName}</button>
    );
}

export default Button;