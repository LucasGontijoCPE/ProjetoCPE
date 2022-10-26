import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicial from "./Pages/Inicial";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import Produtos from "./Pages/Produtos";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/inical" component={Inicial}/>
                <Route path="/login" component={Login}/>
                <Route path="/perfil" component={Perfil}/>
                <Route path="/produtos" component={Produtos}/>
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;