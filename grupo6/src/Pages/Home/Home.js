import React from 'react';
import {Link} from "react-router-dom";

import Menu from '../../Utilitarios/Menu/Menu.js';
import "./Home.css"

function Home() {
    
    return (
    <div>
        <Menu/>

        <div className='Blocos bl1'>
            <div className='bl1-linha'>
                
            </div>
        </div>
        <div>
            <div className='Blocos texto-produtos'>
                <h2 className='textos'>Central de Produtos Esportivos</h2>
                <p className='textos desktop'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua.  Elit ut aliquam purus sit amet luctus venenatis lectus. </p>
                <Link to="produtos" className='Produtosbtn textos'>Produtos</Link>
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