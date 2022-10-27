/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
//import {Link} from "react-router-dom";
import "./produtos.css";

function Produtos() {
    return (
                
        <><nav className="produtos">
                <div>
                    <h1>Produtos:</h1>
                    <h4>Mostrando 9 de X</h4>
                    <h6>Ordenar por:</h6>
                </div>
            </nav>
        <nav className='filtros'>
                <div>
                    <h2>Filtro 1:</h2>
                    <p class = "small">
                        Opção 1<br></br>
                        Opção 2<br></br>
                        Opção 3<br></br>
                        Opção 4<br></br>
                    </p>
                    <h2>Filtro 2:</h2>
                    <p class = "small">
                        Opção 1<br></br>
                        Opção 2<br></br>
                        Opção 3<br></br>
                        Opção 4<br></br>
                    </p>
                    <h2>Filtro 3:</h2>
                    <p class = "small">
                        Opção 1<br></br>
                        Opção 2<br></br>
                        Opção 3<br></br>
                        Opção 4<br></br>
                    </p>
                    <img src='/imagens/Tenis2.jpg' alt="Tenis1"/>
                    <img src='https://m.media-amazon.com/images/I/716bjBfZIHL._AC_SY695_.jpg' height="200px" width="150px"/>
                </div>   
        
            
                
                
        </nav>
        </>
          
    );
}
export default Produtos;