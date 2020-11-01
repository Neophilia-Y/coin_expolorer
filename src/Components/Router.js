import React from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Coin from "../Routes/Coin";
import Price from "../Routes/Price";
import Exchange from "../Routes/Exchange"

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Price} />
            <Route path="/coin" exact component={Coin} />
            <Route path="/exchange" exact component={Exchange} />
            <Redirect to="/" from="*" />
        </Switch>
    </Router>
);