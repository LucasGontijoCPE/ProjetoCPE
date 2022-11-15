import React, { useState } from 'react';
import "./Login.css"
import {Form, Button} from "react-bootstrap";
import Menu from '../../Utilitarios/Menu/Menu';
import Footer from '../../Utilitarios/Footer/Footer.js';
import api from "../../services/api";

function Login() {
    const[email, setEmail]= useState();
    const[password, setPassword]= useState();

    async function login(e){
        e.preventDefault();
        try {
            const response = await api.post('/login', {email, password});
            console.log(response);
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
        alert("Bem vindo! \n" + email);
    }

    function openLogin(){
        document.getElementById("EntradaID2").style.display = "flex";
        document.getElementById("CadastroID2").style.display = "none";
    }

    function openCadastro(){
        document.getElementById("EntradaID2").style.display = "none";
        document.getElementById("CadastroID2").style.display = "flex";
    }


    return (
        <div>
            <Menu/>
            <div id="Desktop" className="container">
        
                <div id='EntradaID' className="entrada">
                    <Form>
                    <h1>Minha conta</h1>
                    <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="senha">
                    <Form.Control type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" onClick={login}>Entrar</Button>
                    <Button variant="light">Esqueceu a sua senha?</Button>
                    
                </Form>
        
                
                </div>

                <div id='CadastroID' className="cadastro">
                    <Form>
                    <h1>Cadastre-se agora</h1>
                    <Form.Group className="mb-3" controlId="nome">
                    <Form.Control type="nickname" placeholder="Nome" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="sobrenome">
                    <Form.Control type="nickname" placeholder="Sobrenome" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Cemail">
                    <Form.Control type="email" placeholder="E-mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confemail">
                    <Form.Control type="email" placeholder="Confirme seu E-mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Csenha">
                    <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confsenha">
                    <Form.Control type="password" placeholder="Confirme sua senha" />
                    </Form.Group>

                    <Button variant="primary">Criar conta</Button>
                    

                    </Form>
                    
                
                </div>

            

            </div>
            <div id="Mobile" className="container">
        
                <div id='EntradaID2' className="entrada">
                    <Form>
                    <h1>Minha conta</h1>
                    <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="senha">
                    <Form.Control type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" onClick={login}>Entrar</Button>
                    <Button variant="light">Esqueceu a sua senha?</Button>
                    
                </Form>
                <Button id='OC-btn' type='button' variant="light" className='mobilebtn' onClick={openCadastro}>
                    Não possui conta? Cadastre-se</Button>
                
                </div>

                <div id='CadastroID2' className="cadastro">
                    <Form>
                    <h1>Cadastre-se agora</h1>
                    <Form.Group className="mb-3" controlId="nome">
                    <Form.Control type="nickname" placeholder="Nome" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="sobrenome">
                    <Form.Control type="nickname" placeholder="Sobrenome" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Cemail">
                    <Form.Control type="email" placeholder="E-mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confemail">
                    <Form.Control type="email" placeholder="Confirme seu E-mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Csenha">
                    <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confsenha">
                    <Form.Control type="password" placeholder="Confirme sua senha" />
                    </Form.Group>

                    <Button variant="primary">Criar conta</Button>
                    

                    </Form>
                    <Button id='OL-btn' type='button' className='mobilebtn' variant="light" onClick={openLogin}>
                        Já tem cadastro? Entrar</Button>
                
                </div>

            

            </div>
            <Footer/>
        </div>
        
        );
}

export default Login;