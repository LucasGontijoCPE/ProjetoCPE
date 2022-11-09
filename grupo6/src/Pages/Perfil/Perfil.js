import React from 'react';
import Menu from '../../Utilitarios/Menu/Menu';
import Footer from '../../Utilitarios/Footer/Footer.js';
import './Perfil.css';

function Perfil() {
    return (
        <div>
            <Menu/>
            <div className='BLPerfil'>
                <div className='titulo conteudo'>
                    <h2 className='textos'>Área do Cliente</h2>
                </div>
                <div className='Perfil conteudo'>
                    <div className='Bloco'>
                        <h2 className='textos'>Visão Geral da Conta</h2>
                        <label className='textos dados'>Nome: <input className='textos' type='text' name='Nome' value='Nome'/></label>
                        <label className='textos dados'>Sobrenome: <input className='textos dados' type='text' name='Sobrenome' value='Sobrenome'/></label>
                        <label className='textos dados'>Email: <input className='textos' type='text' name='Email' value='Email'/></label>
                    </div>
                    
                </div>
            </div>
            <Footer/>
    
        </div>
        
        );
}

export default Perfil;