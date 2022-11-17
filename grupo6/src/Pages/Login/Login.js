import React, { useState } from 'react';
import "./Login.css"
import {Form, Button} from "react-bootstrap";
import Menu from '../../Utilitarios/Menu/Menu';
import Footer from '../../Utilitarios/Footer/Footer.js';
import api from "../../services/api";
import {login,setUserNome,setUserEmail,setUserSobrenome} from "../../services/auth";
import { useHistory } from 'react-router-dom';

function Login() {
    const[email, setEmail]= useState();
    const[password, setPassword]= useState();
    const[name, setName] = useState();
    const[lastname, setSobrenome] = useState();
    const[email2, setEmail2]= useState();
    const[password2, setPassword2]= useState();
    const history = useHistory();

    async function handlelogin(e){
        e.preventDefault();
        try {
            const response = await api.post('/login', {email, password});
            alert("Bem vindo! \n" + response.data.user.name);
            setUserNome(response.data.user.name);
            setUserSobrenome(response.data.user.lastname);
            setUserEmail(response.data.user.email);
            login(response.data.accessToken);
            history.push("/home");
        } catch (error) {
            if(error.response.status === 403){
                alert("Credenciais Invalidas!");
            }else {
                alert(error.response.data.notification);
            }
            console.warn(error);
            
        }
        
    }

    async function handleCadastro(e){
        e.preventDefault();
        if(email !== email2){
            alert("Os emails informados são diferentes");
        }else if(password !== password2){
            alert("As senhas informadas são diferentes");
        }else{
            try {
                await api.post('/users', {name,lastname, email, password});
                alert("Cadastrado com sucesso! \n");
            } catch (error) {
                alert(error.response.data.notification);
                console.warn(error);
                
            }
        }  
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
        <div id='BODY'>
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

                    <Button variant="primary" onClick={handlelogin}>Entrar</Button>
                    <Button variant="light">Esqueceu a sua senha?</Button>
                    
                </Form>
        
                
                </div>

                <div id='CadastroID' className="cadastro">
                    <Form>
                    <h1>Cadastre-se agora</h1>
                    <Form.Group className="mb-3" controlId="nome">
                    <Form.Control type="nickname" placeholder="Nome" onChange={(e)=> setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="sobrenome">
                    <Form.Control type="nickname" placeholder="Sobrenome" onChange={(e)=> setSobrenome(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Cemail">
                    <Form.Control type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confemail">
                    <Form.Control type="email" placeholder="Confirme seu E-mail" onChange={(e) => setEmail2(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Csenha">
                    <Form.Control type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confsenha">
                    <Form.Control type="password" placeholder="Confirme sua senha" onChange={(e) => setPassword2(e.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" onClick={handleCadastro}>Criar conta</Button>
                    

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

                    <Button variant="primary" onClick={handlelogin}>Entrar</Button>
                    <Button variant="light">Esqueceu a sua senha?</Button>
                    
                </Form>
                <Button id='OC-btn' type='button' variant="light" className='mobilebtn' onClick={openCadastro}>
                    Não possui conta? Cadastre-se</Button>
                
                </div>

                <div id='CadastroID2' className="cadastro">
                    <Form>
                    <h1>Cadastre-se agora</h1>
                    <Form.Group className="mb-3" controlId="nome">
                    <Form.Control type="nickname" placeholder="Nome" onChange={(e)=> setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="sobrenome">
                    <Form.Control type="nickname" placeholder="Sobrenome" onChange={(e)=> setSobrenome(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Cemail">
                    <Form.Control type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confemail">
                    <Form.Control type="email" placeholder="Confirme seu E-mail" onChange={(e) => setEmail2(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Csenha">
                    <Form.Control type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confsenha">
                    <Form.Control type="password" placeholder="Confirme sua senha" onChange={(e) => setPassword2(e.target.value)}/>
                    </Form.Group>


                    <Button variant="primary" onClick={handleCadastro}>Criar conta</Button>
                    

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