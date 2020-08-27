import React from 'react'
import getMessages from '../../services/messages'
import {
    Container,
    Message,
    Header,
    ThreeDotsVertical,
    InputBoxContainer,
    AttachIcon,
    EmoticonIcon,
    MicrophoneIcon,
    LeftArrowIcon,
    MessageInput,
    MessageInputWrapper,
    SendMessageIcon
} from './styles'
import { Link } from 'react-router-dom'
import getUserInfo from '../../services/contacts'

export default function Chat({ match }) {
    const { userName } = match.params

    const user = getUserInfo(userName)

    return (
        <>
            <Header>

                <Link to="/" className="backButton" >

                    <LeftArrowIcon />
                    <span>
                        {userName}

                        <p>{user.lastSeen}</p>
                    </span>

                </Link>
                <div>

                    <ThreeDotsVertical />
                    <div className="avatarContainer">
                        <img src={user.avatar} alt="Imagem de perfil"></img>
                    </div>
                </div>
            </Header>
            <Container>
                {
                    getMessages(userName).map(({ content, fromUser, reply }) => (
                        <Message
                            fromUser={fromUser}
                            reply={reply}
                        >
                            {
                                reply && (
                                    <div>
                                        <span>

                                            {userName}
                                        </span>
                                        <span>
                                            {reply}

                                        </span>
                                    </div>
                                )
                            }
                            <p>{content}</p>
                        </Message>

                    ))
                }
                <InputBox />
            </Container>

        </>
    )
}

function InputBox() {
    const [message, setMessage] = React.useState("")

    return (
        <InputBoxContainer>
            <AttachIcon />

            <MessageInputWrapper>
                <MessageInput placeholder="Escreva uma mensagem..." onChange={({ target }) => setMessage(target.value)} />
                <EmoticonIcon />
            </MessageInputWrapper>


            {
                message ? <SendMessageIcon /> : <MicrophoneIcon />
            }
        </InputBoxContainer>
    )
}
