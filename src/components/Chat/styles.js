import styled, { css } from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { TiMicrophone } from 'react-icons/ti'
import { MdInsertEmoticon } from 'react-icons/md'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { BsCursorFill } from 'react-icons/bs'

export const Header = styled.div`
  height: 46px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background-color: var(--color-primary);
  color: var(--color-light);
  font-size: 17px;
  font-weight: bold;
  flex-basis:auto;
  
  

  p {
    font-size: 13px;
    opacity: 0.7;
    flex-weight:normal;
  }

  .avatarContainer{
    img{
        border-radius: 10em 10em;
        width: 40px;
        height: 40px;
        display: flex;
        
       
    }
  }
  div{
    display: flex;
    align-items:center;
    padding-right: 3px;
    justify-content: space-between;

  }
    .backButton{
      background-color: #5682a3;
      border: 0;
      color: #FFF;
      transition: opacity 0.1s;
      cursor: pointer;
      align-self: stretch;
      display: flex;
      align-items:center;
      padding-right: 10px;
      p{
        opacity: 0.7;
        font-weight: normal;
      }
 
      &:hover{
        
        background-color: #496f8c;
        p{
          opacity: 1;
        }
      }
    
  }


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
export const LeftArrowIcon = styled(MdKeyboardArrowLeft)`
    height: 35px;
    width:35px;
    opacity: 0.7;
`

export const ThreeDotsVertical = styled(BsThreeDotsVertical)`
    height: 32px;
    width: 32px;
    opacity: 0.7;
    cursor: pointer;
    padding-right: 3px;
    display: flex;
    justify-content: flex-end;
    flex-basis: auto;
`;

const InputBoxIcon = css`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: #a4a4a4;
`;

export const AttachIcon = styled(AiOutlinePaperClip)`
  ${InputBoxIcon}
`;
export const MicrophoneIcon = styled(TiMicrophone)`
  ${InputBoxIcon}
`;
export const EmoticonIcon = styled(MdInsertEmoticon)`
  ${InputBoxIcon}
`;

export const SendMessageIcon = styled(BsCursorFill)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: #0088cc;
  transform: rotate(45deg);
`;


export const InputBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 54px;
  max-height: 54px;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: var(--color-light);
`

export const MessageInputWrapper = styled.div`
  flex-basis: 80%;
  align-self: center;
  padding: 5px 6px;
  height: 32px;
  display: flex;
  border: 1px solid #eee;
  align-items:center;
  background-color: #eee;
  border-radius: 0.1em;
  &:focus-within{
    background-color: #fff;

  }

`;

export const MessageInput = styled.textarea`
  width: 100%;
  height: 18px;
  padding: 2px;
  color: #a4a4a4;
  background-color: inherit;
  border: none;
  resize: none;
  overflow :hidden;
  font-size: 1.6rem;

 
`;
