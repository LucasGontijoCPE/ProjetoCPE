import React from 'react';
import {Link} from "react-router-dom";
import Menu from '../../Utilitarios/Menu/Menu.js';
import "./Home.css"

function Home() {
    
    return (
    <div>
        <Menu/>


        <h1>Home</h1>
        <Link to="login">Login</Link>
        <Link to="perfil">Perfil</Link>
        <Link to="produtos">Produtos</Link>

    </div>
    

    );

}

export default Home;