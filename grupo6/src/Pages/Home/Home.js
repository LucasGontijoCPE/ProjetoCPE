import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css"

function Home() {
    return (
    <div>
        <div className='Head'>
            <div id="Logo">
                <img src='/imagens/LOGO.png' alt='LOGO'/>
            </div>
            <h2>Menu</h2>
            <h2>Entre ou Cadastre-se</h2>
        </div>
        <h1>Home</h1>
        <Link to="login">Login</Link>
        <Link to="perfil">Perfil</Link>
        <Link to="produtos">Produtos</Link>

    </div>
    

    );

}

export default Home;