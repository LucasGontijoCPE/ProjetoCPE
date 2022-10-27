import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css"

function Home() {
    return (
    <div>
        <div className='Head'>
            <div className='HeadItem'>
                    <img src='/imagens/LOGO.png' alt='LOGO' />
            </div>
            <div className='HeadItem grow2'>
                <div className='MenuBar'>
                    <h2 className='MenuTool textos' >Menu</h2>
                    <h2 className='MenuTool textos'>Produtos</h2>
                    <h2 className='MenuTool textos'>Sobre Nós</h2>
                    <div className='Login MenuTool'>
                        <img src='/imagens/Login.png' alt='Login'/>
                        <h2 className='textos'>Entre ou Cadastre-se</h2>
                    </div>
                    
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