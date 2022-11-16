import React from 'react';
import {Link} from "react-router-dom";
import "./Menu.css"

function Menu(props){
    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
       
    }

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0px";
        
    }

    return(
        <div>
            <div className='Head'>
                <div className='HeadLine'>
                    <Link to="home" className='Logo'>
                            <img src='/imagens/LOGO.png' alt='LOGO' />
                    </Link>
                    <nav className='MenuBar'>
                        <Link to="home" className=' links'>Home</Link>
                        <Link to="produtos" className=' links'>Produtos</Link>
                        <h6 className='links'>Sobre nós</h6>
                        <Link to="perfil" className='Login'>
                            <img src='/imagens/Login.png' alt='Perfil'/>
                            <h2 className='links'>Meu Perfil </h2>
                        </Link>
                        <img src='/imagens/Kart.png' alt='Kart'/>
                    </nav>
                    <div className='SideMenuImage'>
                            <img src='/imagens/Kart.png' alt='Kart' />
                            <button type="button" className='Button'>
                                <img src='/imagens/Menu.png' alt='Menu' onClick={openNav}/>
                            </button>
                    </div>
                </div>
                <div className='HeadLine'>
                    <form className='SearchBar'>
                    <input className='Search' required type={'search'} placeholder="O que está procurando?"  autoComplete='off'/>
                        <button className='Button' type='button'>
                            <img src='/imagens/SearchIcon.png' alt='Search Icon'/>
                        </button>
                    </form>
                    
                </div>   
            </div>
            <div id="mySidebar" className='SideMenu'>
                <button className='closebtn' type='button' onClick={closeNav}>
                    <img src='/imagens/closebtn.png' className='closeMenubtn' alt='Close Button'/>
                </button>

                <nav>
                    <Link to="home" className='links SideMenuTool'>Home</Link>
                    <Link to="login" className='links SideMenuTool'>Login</Link>
                    <Link to="perfil" className='links SideMenuTool'>Perfil</Link>
                    <Link to="produtos" className='links SideMenuTool'>Produtos</Link>
                </nav>
                
            </div>
        </div>
    );
}


export default Menu;