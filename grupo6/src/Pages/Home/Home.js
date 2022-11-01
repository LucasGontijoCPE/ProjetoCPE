import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css"

function Home() {
    
    return (
    <div>


        <h1>Home</h1>
        <Link to="login">Login</Link>
        <Link to="perfil">Perfil</Link>
        <Link to="produtos">Produtos</Link>

        <div className='Blocos bl1'>

        </div>
        <div className='Blocos bl2'>
            
        </div>



    </div>
    

    );

}

export default Home;