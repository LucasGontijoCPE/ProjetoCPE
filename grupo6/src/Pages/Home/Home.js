import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css"

function Home() {
    return (
    <div>
        <div className='Head'>
            <div className='MenuBar'>
                <div>
                    <img src='/imagens/LOGO.png' alt='LOGO'/>
                </div>
                <h2 className='MenuTool'>Menu</h2>
                <h2 className='MenuTool'>Produtos</h2>
                <h2 className='MenuTool'>Sobre Nós</h2>
                <div className='Login'>
                    <img src='/imagens/Login.png' alt='Login'/>
                    <h2 className='MenuTool'>Entre ou Cadastre-se</h2>
                </div>
                
            </div>
            
        </div>
        <h1>Home</h1>
        <Link to="login">Login</Link>
        <Link to="perfil">Perfil</Link>
        <Link to="produtos">Produtos</Link>

    </div>
    

    );

}

export default Home;