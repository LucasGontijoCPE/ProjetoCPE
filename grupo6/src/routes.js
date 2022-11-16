import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import Produtos from "./Pages/Produtos";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({component: Component, ...rest})=>(
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Component {...props}/>
            ) : (
                <Redirect
                    to={{pathname:"/login",state:{from: props.location} }}
                />
            )

        }
    />
);




function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/perfil" component={Perfil}/>
                <Route path="/produtos" component={Produtos}/>
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;