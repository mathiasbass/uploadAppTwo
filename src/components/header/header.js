import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './styles.css'
import Logo from '../../assets/logo-guardiao4.jpg';

function Header(){
    const navigate = useNavigate();    

    return (
        <header>
              <img id='logo' src={Logo} />

                <nav>
                    <ul>
                        <Link style={{ textDecoration: 'none'}} to='/'>
                            <li>Home</li>
                        </Link>
                        <Link style={{ textDecoration: 'none'}} to='/Fotos'>
                            <li>Fotos</li>
                        </Link>
                        <Link style={{ textDecoration: 'none'}} to='/contato'>
                            <li>Contato</li>
                        </Link>
                        <Link style={{ textDecoration: 'none'}} to='/comentario'>
                            <li>Comentarios</li>
                        </Link>
                    
                    </ul>
                </nav>
        </header>
    )
}
 
export default Header;

