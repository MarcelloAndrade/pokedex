import React from 'react';
import { Link } from 'react-router-dom';

import pokemon_logo from '../../assets/pokemon_logo.png';

import { Logo } from './styles'

const Header: React.FC = () => {
    return (
        <>
            <Logo>
                <Link to='/'>
                    <img src={pokemon_logo} alt="Pokémon" />
                </Link>
            </Logo>            
        </>
    )
}

export default Header;