import React from 'react';
import {Link} from "react-router-dom";
import Head from '../../Utilitarios/Head.js';
import "./Home.css"

function Home() {
    
    return (
    <div>
        <Head/>


        <h1>Home</h1>
        <Link to="login">Login</Link>
        <Link to="perfil">Perfil</Link>
        <Link to="produtos">Produtos</Link>

    </div>
    

    );

}

export default Home;