import styled from 'styled-components';

export const Option = styled.div` 
    display: flex;
    justify-content: center;    
    flex-wrap: wrap;   
`;

interface CardOptionProps {
    propBackground: string;
}
export const CardOption = styled.a<CardOptionProps>` 
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 100px;
    border-radius: 20px;
    background: ${props => props.propBackground};
    color: #ffffff;    
    text-decoration: none;
    margin: 15px;  
   
    transition: transform 0.2s;
    &:hover {
        opacity: 0.7;
    }
`;
