import React from "react";
const Button = (props) => { 
    return ( 
        <button onClick={props.myFunction}>{ props.val}</button>
    )
}
export default Button;