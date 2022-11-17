import React from 'react';
import {Link} from "react-router-dom";
import "./Footer.css";

function Footer(){
    return(
        <div className='Footer'>
            <div className='infos'>
                <div className='Contato'>
                    <h2>Contatos:</h2>
                    <p className='footertxt'>Tel: (31)9999-9999</p>
                    <div className='imgetxt'> 
                        <img className='icons' src='/imagens/wppLogo.png' alt='Whatsapp'/>
                        <p className='footertxt'>: (31)99999-9999</p>
                    </div>
                    <div className='imgetxt'>
                        <img className='icons' src='/imagens/LocIcon.png' alt='Localização'/>
                        <p className='footertxt'>Belo Horizonte - MG</p>
                    </div>
                </div>
                <nav className='Navegacao'>
                    <h2>Navegação:</h2>
                    <Link to="home" className='footertxt footerlinks'>Home</Link>
                    <Link to="produtos" className='footertxt footerlinks'>Produtos</Link>
                    <Link to="login" className='footertxt footerlinks'>Login</Link>
                </nav>
                <div className='Redes'>
                    <h2>Nossas Redes:</h2>
                    <div className='imgetxt'>
                        <img className='icons' src='/imagens/InstaIcon.png' alt='Instagram'/>
                        <p className='footertxt'> lojaCPE</p>
                    </div>
                    <div className='imgetxt'>
                        <img className='icons' src='/imagens/faceIcon.png' alt='Facebook'/>
                        <p className='footertxt'> CPESports</p>
                    </div>
                    <div className='imgetxt'>
                        <img className='icons' src='/imagens/LDinIcon.png' alt='LinkedIn'/>
                        <p className='footertxt'> CPESports</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;