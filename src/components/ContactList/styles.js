import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const ContactContainer = styled.div`
   
    border-bottom: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 5px 5px;
    cursor: pointer;
    .avatarContainer{
        display: flex;
        align-items:center;
        flex-basis: 11.8%;
        img{
            border-radius: 10em 10em;
            width: 54px;
            height: 54px;
        }
    
    }

    .main{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 8px 5px;
        span{
            color: #555;
            font-weight: 200;
            font-size: 1.6rem;

        }
        p{
            font-size: 1.8rem;
            font-weight: 700;

        }
    }

    .lastSeen {
        flex-basis: 9%;
        color: #555;
        font-weight: 200;
        font-size: 1.2rem;

    }

    &:hover{
        background-color: #f2f2f2f2;
    }
`;
