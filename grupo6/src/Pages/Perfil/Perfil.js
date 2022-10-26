import React from 'react';
import {Link} from "react-router-dom";

function Perfil() {
    return (
        <div>
            <h1>Perfil</h1>
            <Link to="home">Home</Link>
            <Link to="produtos">Produtos</Link>
    
        </div>
        
        );
}

export default Perfil;