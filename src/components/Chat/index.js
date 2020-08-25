import React from 'react'
import getMessages from '../../services/messages'
import { Container, Message, Header } from './styles'

export default function Chat({ match }) {
    const { user } = match.params
    return (
        <>
            <Header>
                {user}
            </Header>
            <Container>
                {
                    getMessages(user).map(({ content, fromUser, reply }) => (
                        <Message
                            fromUser={fromUser}
                            reply={reply}
                        >
                            {
                                reply && (
                                    <div>
                                        <span>

                                            {user}
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
            </Container>

        </>
    )
}