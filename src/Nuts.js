import React from "react";
import { Link } from "react-router-dom";

function Nuts() {
    return (
        <div>
            <h3>The nuts are tumbling down!</h3>
            <nav><Link to="/">Go back to the vending machine</Link></nav>
            <br></br>
            <img
                src="https://media.giphy.com/media/3bzmWYZsGGSCk7xBQM/giphy.gif"
                alt="Pouring nuts."
            />
        </div>
    );
}

export default Nuts;