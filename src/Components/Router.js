import React from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header"
import Price from "../Route/Price"
import Coin from "../Route/Coin"

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Price} />
            <Route path="/coin" exact component={Coin} />
            <Route path="/exchange" exact component={Price} />
            <Redirect to="/" from="*" />
        </Switch>
    </Router>
);