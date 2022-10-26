import React from 'react';
import {Link} from "react-router-dom";

function Produtos() {
    return (
        <div>
            <h1>Produtos</h1>
            <Link to="home">Home</Link>
            <Link to="perfil">Perfil</Link>
            <Link to="login">Login</Link>
    
        </div>
        
        );
}

export default Produtos;