import React from 'react'
import { MenuIcon, SearchIcon, Container, TelegramIcon, IconWrapper } from './styles'

export function Header() {
    return (


        <Container>
            <IconWrapper>
                <TelegramIcon />
            </IconWrapper>
            <p> Telegram </p>
            <SearchIcon />
            <MenuIcon />
        </Container >



    )
}