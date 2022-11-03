import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css"

function Home() {
    
    return (
    <div>


        <h1>Home</h1>
        <Link to="login">Login</Link>
        <Link to="perfil">Perfil</Link>
        <Link to="produtos">Produtos</Link>

        <div className='Blocos bl1'>
            <div className='bl1-linha'>
                <div className='texto-produtos'>
                    <h2 className='textos'>Central de Produtos Esportivos</h2>
                    <p className='textos desktop'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.  Elit ut aliquam purus sit amet luctus venenatis lectus. </p>
                    <Link to="produtos" className='Produtosbtn textos'>Produtos</Link>
                </div>
            </div>
        </div>
        <div className='Blocos ofertas'>
            <h2 className='textos'>Ofertas Imperdíveis</h2>
            <div className='vitrineOfertas'>
                <div className='produtosOfertas'></div>
                <div className='produtosOfertas'></div>
                <div className='produtosOfertas'></div>
                <div className='produtosOfertas'></div>
            </div>
        </div>



    </div>
    

    );

}

export default Home;