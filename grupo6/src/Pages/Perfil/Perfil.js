import React from 'react';
import Menu from '../../Utilitarios/Menu/Menu';
import Footer from '../../Utilitarios/Footer/Footer.js';
import { logout,getUserNome,getUserEmail,getUserSobrenome,removeUserEmail,removeUserNome,removeUserSobrenome} from '../../services/auth';
import { useHistory } from 'react-router-dom';
import './Perfil.css';

function Perfil() {
    const nome = getUserNome();
    const sobrenome = getUserSobrenome();
    const email = getUserEmail();
    const history = useHistory();
    async function exit(){
        removeUserNome();
        removeUserSobrenome();
        removeUserEmail();
        logout();
        history.push("/login");
    }
    return (
        <div>
            <Menu/>
            <div className='BLPerfil'>
                <div className='titulo conteudo'>
                    <h2 className='textos'>Área do Cliente</h2>
                </div>
                <div className='Perfil conteudo'>
                    <div className='Bloco'>
                        <h2 className='textos'>Visão Geral</h2>
                        <label className='textos dados'>Nome: <p className='textos'  name='Nome'>{nome}</p></label>
                        <label className='textos dados'>Sobrenome: <p className='textos '  name='Sobrenome'>{sobrenome}</p></label>
                        <label className='textos dados'>Email: <p className='textos'  name='Email'>{email}</p></label>
                        <button className='textos' onClick={exit}>Sair da minha conta</button>
                    </div>
                    
                </div>
            </div>
            <Footer/>
    
        </div>
        
        );
}

export default Perfil;