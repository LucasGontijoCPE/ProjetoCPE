import React from 'react';
import {Link} from "react-router-dom";
import "./Head.css"

function Head(props){


    return(
        <div className='Head'>
            <div className='HeadLine'>
                    <Link to="home" className='Logo'>
                            <img src='/imagens/LOGO.png' alt='LOGO' />
                    </Link>
                <nav className='MenuBar'>
                    <Link to="home" className=' textos'>Home</Link>
                    <Link to="produtos" className=' textos'>Produtos</Link>
                    <p className='textos'>Sobre nós</p>
                    <Link to="login" className='Login'>
                        <img src='/imagens/Login.png' alt='Login'/>
                        <h2 className='textos'>Entre ou Cadastre-se</h2>
                    </Link>
                        
                    
                    <img src='/imagens/Kart.png' alt='Kart' className='MenuTool'/>
                </nav>
                <nav className='SideMenuImage'>
                        <img src='/imagens/Kart.png' alt='Kart' />
                        <button type="button" id='Collapsible' className='Button'>
                            <img src='/imagens/Menu.png' alt='Menu' />
                        </button>
                        <div className='SideMenu'>

                        </div>
                        
                </nav>
            </div>
            <div className='HeadLine'>
                <form className='SearchBar'>
                   <input className='Search' required type={'search'} placeholder="O que está procurando?"  autoComplete='off'/>
                    <button className='Button'>
                        <img src='/imagens/SearchIcon.png' alt='Search Icon'/>
                    </button>
                </form>
                
            </div>
            

            
        </div>
    );
}
export default Head;