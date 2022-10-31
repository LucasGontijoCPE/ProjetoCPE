import React from 'react';
import {Link} from "react-router-dom";
import "./produtos.css";

function Produtos() {
    return (
        <div>
            <head>
                <h1>Produtos</h1>
                <Link to="home">Home</Link>
                <Link to="perfil">Perfil</Link>
                <Link to="login">Login</Link>
            </head>
                <body>
                    <header>
                    </header>
                    <main>
                            <ul>
                                <h2>Filtro 1:</h2>
                                <li>Opção 1</li>
                                <li>Opção 2</li>
                                <li>Opção 3</li>
                                <li>Opção 3</li>
                                <h2>Filtro 2:</h2>
                                <li>Opção 1</li>
                                <li>Opção 2</li>
                                <li>Opção 3</li>
                                <li>Opção 3</li>
                                <h2>Filtro 3:</h2>
                                <li>Opção 1</li>
                                <li>Opção 2</li>
                                <li>Opção 3</li>
                                <li>Opção 3</li>
                                <h2>Filtro 4:</h2>
                                <li>Opção 1</li>
                                <li>Opção 2</li>
                                <li>Opção 3</li>
                                <li>Opção 3</li>
                            </ul>
                            <h3>
                                <p className='p2'>Produtos:</p>
                                <p className='p3'>Mostrando 9 de X</p>
                            </h3>
                            <p className='p4'>Ordernar por:</p>
                            
                            <ul className='produtos'>
                                <li>
                                    <img className='imagema' src='https://image.shutterstock.com/image-vector/vector-realistic-3d-white-silver-600w-1362216575.jpg' alt='garrafa térmica'/>
                                    <p className='descricao1'>Garrafa Térmica</p>
                                    <p className='preco'>R$ 85,00</p>
                                </li>
                                <li>
                                    <img className='imagema' src='https://image.shutterstock.com/image-vector/vector-black-mock-backpack-bag-600w-1065870533.jpg' alt='bolsa esportiva'/>
                                    <p className='descricao2'>Bolsa Esportiva</p>
                                    <p className='preco'>R$ 90,00</p>
                                </li>
                                <li>
                                    <img className='imagema' src='https://image.shutterstock.com/image-photo/just-place-your-picture-on-600w-2178940433.jpg' alt='tenis laranja'/>
                                    <p className='descricao3'>Tenis Laranja</p>
                                    <p className='preco'>R$ 240,00</p>
                                </li>
                                <li>
                                    <img className='imagema' src='https://image.shutterstock.com/image-photo/kyiv-ukraine-march12-2021-studio-600w-1935521242.jpg' alt='tenis de corrida'/>
                                    <p className='descricao4'>Tenis de Corrida</p>
                                    <p className='preco'>R$ 220,00</p>
                                </li>
                            </ul>
                    </main>
                </body>
        </div>
    );
}

export default Produtos;