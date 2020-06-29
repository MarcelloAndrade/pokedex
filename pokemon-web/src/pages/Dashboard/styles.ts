import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: center;
    
    img {
        margin-top: 90px;
        width: 350px;
        height: auto;
    }       
`;

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

export const Option = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
`;

interface CardOptionProps {
    propBackground: string;
}
export const CardOption = styled.button<CardOptionProps>` 
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 30px;
    width: 200px;
    height: 100px;
    border-radius: 20px;
    background: ${props => props.propBackground};
    color: #ffffff;
    border: 0;

    transition: transform 0.2s;
    &:hover {
        opacity: 0.7;
    }
`;