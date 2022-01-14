import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App.js";
import Car from "./Car.js";
function Main(){
    return(
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Car" component={Car} /> 
       </Switch>
    )
}
export default Main;
