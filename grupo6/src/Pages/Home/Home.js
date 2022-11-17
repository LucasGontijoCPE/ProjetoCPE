import React from 'react';
import {Link} from "react-router-dom";

import Menu from '../../Utilitarios/Menu/Menu.js';
import Footer from '../../Utilitarios/Footer/Footer.js';
import "./Home.css"

function Home() {
    
    return (
    <div className='BODY'>
        <Menu/>
        
        <div className='Blocos bl1'>
            <div className='bl1-linha'>
                
            </div>
        </div>
        
        <div className='Blocos texto-produtos'>
            <h2 className='textos'>Central de Produtos Esportivos</h2>
            <p className='textos desktop'>Fundada por um grupo radical de empreendedores e unidos pelo seu amor por esportes,
            a CPE reune artigos esportivos diversos para te auxiliar na sua paixão. </p>
            <Link  to="produtos" className='Produtosbtn textos'>Produtos</Link>
        </div>
        
        <div className='Blocos ofertas'>
            <h2 className='textos'>Ofertas Imperdíveis</h2>
            <div className='vitrineOfertas'>
                <Link to="produtos" className='produtosOfertas'>
                    <img className='imgProd' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLoZmFHP2RyVD_Po5tG3L3wtIJeEOm6VdFug&usqp=CAU' alt='Cesta mais bola de basquete'/>
                </Link>
                <Link to="produtos" className='produtosOfertas'>
                    <img className='imgProd' src='https://cdn.pixabay.com/photo/2016/04/12/16/57/tent-1324847__340.jpg' alt='Cabana'/>
                </Link>
                <Link to="produtos" className='produtosOfertas'>
                    <img className='imgProd' src='https://cdn.pixabay.com/photo/2016/10/26/17/52/shoe-1772074__340.jpg' alt='tenis Infantil'/>
                </Link>
                <Link to="produtos" className='produtosOfertas'>
                    <img className='imgProd' src='https://images-ext-2.discordapp.net/external/6dElYvgBNvVIPDfA2WiQ8DFgp9qS6lG9Gc_ocecfaCE/%3Fv%3D1617987596/https/cdn.vnda.com.br/680x/kouda/2021/04/09/13_4_8_806_GarrafaTrmicaInoxKouda500mlGreyRoseGold1037314100_01.jpg?width=473&height=473' alt='garrafa térmica'/>
                </Link>
            </div>
        </div>
        <Footer/>
    </div>
    

    );

}

export default Home;