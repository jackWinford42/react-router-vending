import React from "react";

import Snickers from "./Snickers";
import Pepsi from "./Pepsi";
import Nuts from "./Nuts";
import Home from "./Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function VendingMachine() {
    return (
        <div className="App">
            <h1>Vending Machine</h1>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/snickers" component={Snickers}/>
                    <Route exact path="/pepsi">
                        <Pepsi />
                    </Route>
                    <Route exact path="/nuts">
                        <Nuts />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default VendingMachine;