import React, { useState } from 'react';
//import {Link} from "react-router-dom";
import "./Login.css"
import {Form, Button} from "react-bootstrap";

function Login() {
    const[email, setEmail]= useState();
    const[password, setPassword]= useState();

    function login(){
        alert("Bem vindo! \n" + email);
    }

    return (
        <div className="container">
    
            <div className="entrada">
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

            <div className="cadastro">
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


        
        );
}

export default Login;