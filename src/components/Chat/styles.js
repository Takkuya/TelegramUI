import styled from 'styled-components';

export const Header = styled.div`
  height: 46px;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  background-color: var(--color-primary);
  color: var(--color-light);
`;

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 5px;
`
export const Message = styled.div`
    margin: 6px 0px;
    padding: 10px;
    background-color:  ${({ fromUser }) => fromUser ? '#e4ecf2' : '#f1f1f1'};
    align-self: ${({ fromUser }) => fromUser ? 'flex-end' : 'flex-start'};
    font-size: 1.5rem;
    max-width: 60vw;
    border-radius: 0.5em;
    p {
      word-wrap: break-word;
      margin-top: ${({ reply }) => reply ? '7px' : '0'};
    }

    div {
      border-left: 3px solid var(--color-primary);
      padding: 2px 6px;
      display:flex;
      flex-direction: column;
      span:first-of-type{
        color: var(--color-primary);
        font-weight: 600;
      }
      
    }

`