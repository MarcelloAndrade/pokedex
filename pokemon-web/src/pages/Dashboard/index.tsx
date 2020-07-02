import React from 'react';

import Header from '../../components/Header/index';
import { Option, CardOption } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <Header/>

            <Option>                
                <CardOption href="/pokedex" propBackground="#4db6ac" >Pokédex</CardOption>
                <CardOption propBackground="#673ab7">Habilidades</CardOption>
                <CardOption propBackground="#03a9f4">Itens</CardOption>
                <CardOption propBackground="#fdd835">Locais</CardOption>                
            </Option>
            
        </>
    )
}

export default Dashboard;