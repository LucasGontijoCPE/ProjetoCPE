import React from 'react';
import "./Home.css"

function Head(props){
    return(
        <div className='Head'>
            <div className='HeadItem grow1'>
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
    );
}
export default Head;