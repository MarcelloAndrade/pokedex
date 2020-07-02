import styled from 'styled-components';

export const Form = styled.form`
    margin-top: 30px;        
    
    display: flex;    
    justify-content: center; 

    input {     
        width: 350px;
        height: 50px;        
        padding: 0px 24px;
        border-radius: 20px 0 0 20px;
        border: 0;
        color: #3a3a3a;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        background: #ee1515;
        height: 50px;
        width: 50px;
        border: 0;
        border-radius: 0 20px 20px 0;
        
        display: flex;
        justify-content: center;
        align-items: center;

        transition: transform 0.2s;
        &:hover {
            background: #d32f2f ;
        }

        svg {                        
            color: #ffffff;
        }       
    }
`;

export const Cards = styled.div`
    margin: 50px;
    display: flex;    
    flex-wrap: wrap;
    
    /*
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-gap: 40px;
     */
    /*grid-auto-rows: 500px;*/
`;

interface PokemonProps {
    type: string;
}

export const Card =styled.div<PokemonProps>`
    background: ${props => 
        (props.type === 'Grass' && '#78C850') ||
        (props.type === 'Poison' && '#A040A0') ||
        (props.type === 'Fire' && '#F08030') ||
        (props.type === 'Ice' && '#98D8D8') ||
        (props.type === 'Flying' && '#A890F0') ||
        (props.type === 'Psychic' && '#F85888') ||
        (props.type === 'Water' && '#6890F0') ||
        (props.type === 'Ground' && '#E0C068') ||
        (props.type === 'Rock' && '#B8A038') ||
        (props.type === 'Electric' && '#F8D030') ||
        (props.type === 'Bug' && '#A8B820') ||
        (props.type === 'Ghost' && '#705898') ||
        (props.type === 'Fighting' && '#C03028') ||
        (props.type === 'Dark' && '#705848') ||
        (props.type === 'Steel' && '#B8B8D0') ||
        (props.type === 'Dragon' && '#7038F8') ||
        '#A8A878'
    };

    min-width: 300px;    
    height: 170px;
    border-radius: 20px;
    padding: 20px;
    margin: 10px;

    &:hover {
        opacity: 0.7;
    }
    
    a {
        color: #fff;
        text-decoration: none;

        div {
            display: flex;
            justify-content: space-between;

            h2 {
                z-index: 1;                
            }
            
            p { 
                margin: 10px 5px 0 0;
                opacity: 0.3;
                color: #333;
            }
        }       

        section {            
            display: flex;
            justify-content: space-around;
            margin-top: 5px;
            
            div {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;

                span {
                    width: 85px;
                    color: black;
                    background: #fff;
                    opacity:0.6;                    
                    text-align: center;
                    border-radius: 20px;
                    margin-bottom: 10px;
                    font-size: 16px;
                }                
            }

            img {
                z-index: 0;
                margin-top: -20px;            
            }
        }
    } 
`;

export const Error = styled.span`
  display: flex;
  justify-content: center;
  color: #c53030;
  margin-top: 8px;
`;