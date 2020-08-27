import React from 'react'
import { users } from '../../services/contacts'
import { Container, ContactContainer } from './styles'

export default function ContactList() {
    return (
        <Container bgColor="#333">
            {
                users.map(contact => <Contact {...contact} />)
            }

        </Container>
    )
}


function Contact({ name, avatar, lastMessage, lastSeen }) {
    return (
        <ContactContainer to={`/${name}`}>
            <div className="avatarContainer">
                <img src={avatar} alt={name} />

            </div>
            <div className="main">
                <p>{name}</p>
                <span>{lastMessage}</span>
            </div>
            <div className="lastSeen">
                {lastSeen}
            </div>
        </ContactContainer>
    )
}
