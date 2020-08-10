import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Header.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';


function Header() {
    return (
        <nav className='Header'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt='cineflix logo' />
            </Link>

            <Button as={Link} className='ButtonLink' to='/cadastro/video'>Novo vídeo</Button> 
        </nav>
    );
}

export default Header;