import React from "react";
import { Link } from "react-router-dom";

function Snickers() {
    return (
        <div>
            <h3>MMMMM The Perfect Candy Bar</h3>
            <nav><Link to="/">Go back to the vending machine</Link></nav>
            <br></br>
            <img
                src="https://media.giphy.com/media/106EGwK7KpwbCg/giphy.gif"
                alt="Snickers bar with fireworks behind it"
            />
        </div>
    );
}

export default Snickers;