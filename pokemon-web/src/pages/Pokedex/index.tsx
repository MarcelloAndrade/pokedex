import React, { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header/index';

import { FaSearch } from "react-icons/fa";
import { Form, Cards, Card, Error } from './styles';

interface Pokemon {
    id: number;
    num: string;
    name: string;
    img: string;
    type: string[];
}

const Pokedex: React.FC = () => {
    const [findPokemon, setFindPokemon] = useState('');
    const [inputError, setInputError] = useState('');

    const [pokemons, setPokemons] = useState<Pokemon[]>( () => {                    
        return [];
    });    
    
    useEffect(() => {
        if(findPokemon && findPokemon.length >= 3){
            api.get(`/pokemon`, {
                params: {                    
                    name_like: findPokemon
                }
            }).then( response => {
                console.log(`Find one Pokemon`);
                console.log(response);
                setPokemons(response.data);
            });
        } else if(pokemons.length == 0) {
            api.get(`/pokemon`).then( response => {
                console.log(`Find all Pokemon`);
                console.log(response);
                setPokemons(response.data);
            });
        }        
    }, [findPokemon] );
    
    function handleFindPokemon(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if(!findPokemon) {            
            setInputError("Digite o nome do pokemon.");
            return;
        }
        
        try {
            api.get(`/pokemon`, {
                params: {
                    name: findPokemon
                }
            }).then( response => {
                console.log(`Find one Pokemon`);
                console.log(response);
                setPokemons(response.data);
                setFindPokemon('');
                setInputError('');
            }); 
        } catch (error) {
            setInputError("Erro na busca pelo repositório.");
        }        
    }

    return (
        <>
            <Header/>
            
            <Form> {/**onSubmit={handleFindPokemon} */}
                <input value={findPokemon}
                       onChange={e => setFindPokemon(e.target.value)}
                       type="text" placeholder="Pikachu" />
                <button type="submit">
                    <FaSearch size={15}/>
                </button>
            </Form>
            { inputError && <Error>{inputError}</Error> }
            
            <Cards>
                { pokemons.map(p => (
                    <Card key={p.id} type={p.type[0]}>
                        <Link to={`/pokedex/${p.id}`}>
                            <div>
                                <h2>{p.name}</h2>                            
                                <p>#{p.num}</p>
                            </div>
                            <section>
                                <div>
                                    { p.type.map(t => (
                                        <span key={t}>{t}</span>                                            
                                    )) }                                    
                                </div>
                                <img src={p.img} alt={p.name} />                                                        
                            </section>                    
                        </Link>
                    </Card>
                )) }
            </Cards>
        </>
    )
}

export default Pokedex;