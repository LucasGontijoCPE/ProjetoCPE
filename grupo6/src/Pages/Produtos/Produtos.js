import React from 'react';
import Menu from '../../Utilitarios/Menu/Menu.js';
import "./produtos.css";

function Produtos() {
    return (
        <div>
                <body>
                    <Menu/>
                    <main>
                            <ul className='filtro'>
                                <h2>Gênero:</h2>
                                <li>Masculino</li>
                                <li>Feminino</li>
                                <h2>Faixa etária:</h2>
                                <li>Infantil</li>
                                <li>Adolescente</li>
                                <li>Adulto</li>
                                <li>Idoso</li>
                                <h2>Acessórios:</h2>
                                <li>Luva</li>
                                <li>Bola</li>
                                <li>Relógio</li>
                                <li>Bolsa</li>
                                <li>Boné e Chapeus</li>
                                <li>Outros</li>
                                <h2>Calçados:</h2>
                                <li>Futebol</li>
                                <li>Futsal</li>
                                <li>Basquete</li>
                                <li>Corrida</li>
                                <li>Treining</li>
                                <li>Chinelo</li>
                                <li>Sandália</li>
                                <li>Outros</li>
                            </ul>
                            <h3>
                                <p className='p2'>Produtos:</p>
                                <p className='p3'>Mostrando 12 de X</p>
                            </h3>

                            <form className='ordenacao'>
                                <legend>Ordenar por</legend>
                                    <select>
                                        <option>Preço</option>
                                        <option>Ordem alfabética</option>
                                        <option>Mais comprados</option>
                                    </select>
                            </form>

                            <ul className='produtos1'>
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
                                <li>
                                    <img className='imagema' src='https://cdn.pixabay.com/photo/2016/03/09/13/47/running-watch-1246430__340.png' alt='Relógio'/>
                                    <p className='descricao1'>Relógio</p>
                                    <p className='preco'>R$ 300,00</p>
                                </li>
                                <li>
                                    <img className='imagema' src='https://cdn.pixabay.com/photo/2016/04/12/16/57/tent-1324847__340.jpg' alt='Cabana'/>
                                    <p className='descricao5'>Cabana</p>
                                    <p className='preco'>R$ 150,00</p>
                                </li>
                                <li>
                                    <img className='imagema' src='https://cdn.pixabay.com/photo/2016/10/26/17/52/shoe-1772074__340.jpg' alt='tenis Infantil'/>
                                    <p className='descricao6'>Tenis Infantil</p>
                                    <p className='preco'>R$ 100,00</p>
                                </li>
                                <li>
                                    <img className='imagema' src='https://media.istockphoto.com/photos/closeup-of-a-pair-of-black-leather-football-boots-isolated-on-white-picture-id1404635567?b=1&k=20&m=1404635567&s=170667a&w=0&h=wfFqqR8l9vPLbvQURTI1C8Bjr_T7dmN8-0WIgJvuYB0=' alt='Chuteira'/>
                                    <p className='descricao10'>Chuteira</p>
                                    <p className='preco'>R$ 170,00</p>
                                </li>
                                <li>
                                    <img className='imagema1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1xB8D52z1ilphOm74bFCHPSxRdxIBieU3w&usqp=CAU' alt='Bola de futebol'/>
                                    <p className='descricao1'>Bola de Futebol</p>
                                    <p className='preco'>R$ 120,00</p>
                                </li>
                                <li>
                                    <img className='imagema' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKto8dghcQ5TxnkAMkH-zZmaxuF6LM8sri3Sf_1V2D9vz99oXNR_UoZDEHsfEEYKbRBOM&usqp=CAU' alt='Caneleira'/>
                                    <p className='descricao7'>Caneleira</p>
                                    <p className='preco'>R$ 40,00</p>
                                </li>
                                <li>
                                    <img className='imagema' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThA61RCKPU6jWUNyo66yHN2xBC0VoHsrJQgg&usqp=CAU' alt='roupa de surf'/>
                                    <p className='descricao8'>Roupa de Surf</p>
                                    <p className='preco'>R$ 270,00</p>
                                </li>
                                <li>
                                    <img className='imagema' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLoZmFHP2RyVD_Po5tG3L3wtIJeEOm6VdFug&usqp=CAU' alt='Cesta mais bola de basquete'/>
                                    <p className='descricao9'>Cesta + Bola de basquete</p>
                                    <p className='preco'>R$ 440,00</p>
                                </li>
                            </ul>
                    </main>

                    <footer>

                    </footer>
                </body>
        </div>
    );
}

export default Produtos;