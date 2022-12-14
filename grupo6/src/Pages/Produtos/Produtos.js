import React from 'react';
import Menu from '../../Utilitarios/Menu/Menu.js';
import Footer from '../../Utilitarios/Footer/Footer.js';
import "./produtos.css";

function Produtos() {

    function openFiltros(){
        document.getElementById("mblFiltro").style.width = "200px";
        document.getElementById("mblFiltro").style.paddingLeft = "10px";
    }
    function closeFiltros(){
        document.getElementById("mblFiltro").style.width = "0";
        document.getElementById("mblFiltro").style.paddingLeft = "0px";
    }

    return (
        <div>
                <div className='body'>
                    <Menu/>
                    <div className='main'>
                        <div id="dsktFiltro" className='filtro'>
                            <div className='filtros' >
                                <h2>Gênero:</h2>
                                <li>Masculino</li>
                                <li>Feminino</li>
                            </div>
                            <div className='filtros' >
                                <h2>Faixa etária:</h2>
                                <li>Infantil</li>
                                <li>Adolescente</li>
                                <li>Adulto</li>
                                <li>Idoso</li>
                            </div>
                            <div className='filtros' >
                                <h2>Acessórios:</h2>
                                <li>Luva</li>
                                <li>Bola</li>
                                <li>Relógio</li>
                                <li>Bolsa</li>
                                <li>Boné e Chapeus</li>
                                <li>Outros</li>
                            </div>
                            <div className='filtros' >
                                <h2>Calçados:</h2>
                                <li>Futebol</li>
                                <li>Futsal</li>
                                <li>Basquete</li>
                                <li>Corrida</li>
                                <li>Treining</li>
                                <li>Chinelo</li>
                                <li>Sandália</li>
                                <li>Outros</li>
                            </div>
                            
                        </div>
                        <div className='Produtos'>
                            <div className='ProdCabecalho'>
                                <button className='btnFiltro' type='button' onClick={openFiltros} >
                                    <p>Filtros</p>
                                </button>
                                <div className='itens'>
                                    <h2>Produtos:</h2>
                                    <p>Mostrando 12 de 12</p>
                                </div>

                                <form className='ordenacao'>
                                    <legend>Ordenar por</legend>
                                        <select>
                                            <option>Preço</option>
                                            <option>Ordem alfabética</option>
                                            <option>Mais comprados</option>
                                        </select>
                                </form>
                            </div>

                            <ul className='produtos1'>
                                <li>
                                    <img className='imagema' src='https://images-ext-2.discordapp.net/external/6dElYvgBNvVIPDfA2WiQ8DFgp9qS6lG9Gc_ocecfaCE/%3Fv%3D1617987596/https/cdn.vnda.com.br/680x/kouda/2021/04/09/13_4_8_806_GarrafaTrmicaInoxKouda500mlGreyRoseGold1037314100_01.jpg?width=473&height=473' alt='garrafa térmica'/>
                                    <p className='descricao'>Garrafa Térmica</p>
                                    <p className='preco'>R$ 85,00</p>
                                    
                                    
                                </li>
                                <li>
                                    <img className='imagema' src='https://images-ext-1.discordapp.net/external/Qkl2337rbbAmZECCH9r6xQqk3m0FGsO5zGV1_oGVae8/https/img.ltwebstatic.com/images3_pi/2022/04/13/16498200099b0d2c2a4d8c8c890410220e655f79f8_thumbnail_600x.webp?width=355&height=473' alt='bolsa esportiva'/>
         
                                    <p className='descricao'>Bolsa Esportiva</p>
                                    <p className='preco'>R$ 90,00</p>   
                                    
                                    
                                </li>
                                <li>
                                    <img className='imagema' src='https://images-ext-1.discordapp.net/external/qnpzgLyJLi3ZdTMC1OHAONImxj2ec5fV1hKCgXwAhfo/https/maze.cdn.plataformaneo.com.br/produto/multifotos/hd/20220406144100_1092998908_DZ.png?width=473&height=473' alt='tenis laranja'/>
                                    
                                    <p className='descricao'>Tenis Laranja</p>
                                    <p className='preco'>R$ 240,00</p>   
               
                                    
                                </li>
                                <li>
                                    <img className='imagema' src='https://images-ext-2.discordapp.net/external/S7vXRjI8TuweEtX1JNgphJG4Fq9nmqnJZMAms1DisWg/https/www.diariodoaco.com.br/images/noticias/95290/20220221075625_evTrRh8rgK.jpg?width=631&height=473' alt='tenis de corrida'/>
                                    
                                    <p className='descricao'>Tenis de Corrida</p>
                                    <p className='preco'>R$ 220,00</p>  
               
                                </li>
                                <li>
                                    <img className='imagema' src='https://cdn.pixabay.com/photo/2016/03/09/13/47/running-watch-1246430__340.png' alt='Relógio'/>
                                    
                                    <p className='descricao'>Relógio</p>
                                    <p className='preco'>R$ 300,00</p> 
               
                                    
                                </li>
                                <li>
                                    <img className='imagema' src='https://cdn.pixabay.com/photo/2016/04/12/16/57/tent-1324847__340.jpg' alt='Cabana'/>
                                    
                                    <p className='descricao'>Cabana</p>
                                    <p className='preco'>R$ 150,00</p> 
               
                                    
                                </li>
                                <li>
                                    <img className='imagema' src='https://cdn.pixabay.com/photo/2016/10/26/17/52/shoe-1772074__340.jpg' alt='tenis Infantil'/>
                                    
                                        <p className='descricao'>Tenis Infantil</p>
                                        <p className='preco'>R$ 100,00</p> 
               
                                    
                                </li>
                                <li>
                                    <img className='imagema' src='https://media.istockphoto.com/photos/closeup-of-a-pair-of-black-leather-football-boots-isolated-on-white-picture-id1404635567?b=1&k=20&m=1404635567&s=170667a&w=0&h=wfFqqR8l9vPLbvQURTI1C8Bjr_T7dmN8-0WIgJvuYB0=' alt='Chuteira'/>
                                    
                                    
                                        <p className='descricao'>Chuteira</p>
                                        <p className='preco'>R$ 170,00</p>
               
                                    
                                </li>
                                <li>
                                    <img className='imagema' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1xB8D52z1ilphOm74bFCHPSxRdxIBieU3w&usqp=CAU' alt='Bola de futebol'/>
                                    
                                        <p className='descricao'>Bola de Futebol</p>
                                        <p className='preco'>R$ 120,00</p>
               
                                    
                                </li>
                                <li>
                                    <img className='imagema' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKto8dghcQ5TxnkAMkH-zZmaxuF6LM8sri3Sf_1V2D9vz99oXNR_UoZDEHsfEEYKbRBOM&usqp=CAU' alt='Caneleira'/>
                                    
                                        <p className='descricao'>Caneleira</p>
                                        <p className='preco'>R$ 40,00</p>
               
                                    
                                </li>
                                <li>
                                    <img className='imagema' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThA61RCKPU6jWUNyo66yHN2xBC0VoHsrJQgg&usqp=CAU' alt='roupa de surf'/>
                                    
                                        <p className='descricao'>Roupa de Surf</p>
                                        <p className='preco'>R$ 270,00</p> 
               
                                    
                                </li>
                                <li>
                                    <img className='imagema' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLoZmFHP2RyVD_Po5tG3L3wtIJeEOm6VdFug&usqp=CAU' alt='Cesta mais bola de basquete'/>
                                    
                                    <p className='descricao'>Kit basquete</p>
                                    <p className='preco'>R$ 440,00</p>
                        
                                    
                                </li>
                            </ul>
                        </div>
                            

                           
                    </div>

                    <Footer/>
                </div>
            <div id="mblFiltro" className='filtro'>
                <button className='closebtn' type='button' onClick={closeFiltros}>
                    <img id='closefiltro' src='/imagens/closebtn.png' alt='Fechar filtros'/>
                </button>
                <div className='filtros' >
                    <h2>Gênero:</h2>
                    <li>Masculino</li>
                    <li>Feminino</li>
                </div>
                <div className='filtros' >
                    <h2>Faixa etária:</h2>
                    <li>Infantil</li>
                    <li>Adolescente</li>
                    <li>Adulto</li>
                    <li>Idoso</li>
                </div>
                <div className='filtros' >
                    <h2>Acessórios:</h2>
                    <li>Luva</li>
                    <li>Bola</li>
                    <li>Relógio</li>
                    <li>Bolsa</li>
                    <li>Boné e Chapeus</li>
                    <li>Outros</li>
                </div>
                <div className='filtros' >
                    <h2>Calçados:</h2>
                    <li>Futebol</li>
                    <li>Futsal</li>
                    <li>Basquete</li>
                    <li>Corrida</li>
                    <li>Treining</li>
                    <li>Chinelo</li>
                    <li>Sandália</li>
                    <li>Outros</li>
                </div>
                
            </div>
        </div>
    );
}

export default Produtos;