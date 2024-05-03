import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/logo-guardiao4.jpg';

function Footer() {
    return (
        <>
            <footer>

                <img id='logo' src={Logo} />
                <span> Todos os direitos reservados ©</span>
                <span> Desenvolvido por: Mathias Pereira</span>
            
                <nav className='footer-navigation'>
                    <ul className='list-navigation'>
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
            </footer>
        </>

    )
}

export default Footer;