import React from "react";
import { Link } from "react-router-dom";

function Pepsi() {
    return (
        <div>
            <h3>Look at it shine!</h3>
            <nav><Link to="/">Go back to the vending machine</Link></nav>
            <br></br>
            <img
                src="https://media.giphy.com/media/3mJEIkHuRENZZRfx11/giphy.gif"
                alt="Spinning shinning Pepsi."
            />
        </div>
    );
}

export default Pepsi;