import styled from 'styled-components'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { BsCursorFill } from 'react-icons/bs'


export const MenuIcon = styled(FiMenu)`
    color: var(--color-light);
    height: 25px;
    width: 40px;
    cursor: pointer;
    margin: 10px 0px;
    flex-basis: 5%;

 
`;
export const SearchIcon = styled(FiSearch)`
    color: var(--color-light);
    height: 25px;
    width: 25px;
    cursor: pointer;
    margin: 10px 0px;
    flex-basis: 5%;
  
`;

export const TelegramIcon = styled(BsCursorFill)`
    height: 16px;
    width: 16px;
    color: white;
    cursor: pointer;
`;

export const IconWrapper = styled.div`
    background-color: #496f8c;
    margin: auto;
    border-radius: 10em 10em;
   
    flex-basis: 10%;
    max-width: 28px;
    text-align: center;
    padding-top: 2px;
`

export const Container = styled.div`
    background-color: var(--color-primary);
    color: var(--color-light);
    height: 46px;
    display: flex;
    justify-items: space-between;
    align-items: center;

    p{
        padding-left: 15px;
        flex-basis: 80%;
        font-size: 16px;
        margin: 10px 0px;
    }
`;

