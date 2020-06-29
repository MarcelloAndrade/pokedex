import React from 'react';

import { Header, Form, Option, CardOption } from './styles'

import pokemon_logo from '../../assets/pokemon_logo.png';
import { FaSearch } from "react-icons/fa";

const Dashboard: React.FC = () => {
    return (
        <>
            <Header>
                <img src={pokemon_logo} alt="Pokémon" />
            </Header>

            <Form>
                <input type="text" placeholder="Pikachu" />
                <button type="submit">
                    <FaSearch size={15}/>
                </button>
            </Form>

            <Option>
                <CardOption propBackground="#4db6ac">Pokédex</CardOption>
                <CardOption propBackground="#673ab7">Habilidades</CardOption>
                <CardOption propBackground="#03a9f4">Itens</CardOption>
                <CardOption propBackground="#fdd835">Locais</CardOption>                
            </Option>
        </>
    )
}

export default Dashboard;