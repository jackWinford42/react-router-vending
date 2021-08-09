import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h4>Buy Something</h4>
            <nav>
                <ul>
                    <li><Link to="/snickers">Acquire Snickers $133.70</Link></li>
                    <li><Link to="/pepsi">Purchase Pepsi $13.37</Link></li>
                    <li><Link to="/nuts">Buy Nuts $1337.00</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;