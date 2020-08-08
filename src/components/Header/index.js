import React from 'react'
import { Link } from 'react-router-dom'

import { SContainer, STitle, SIcon } from './styles'
import backIcon from '../../assets/imagens/backicon.png'
import headerIcon from '../../assets/imagens/headericon.png'

function Header(props) {
    return (
        <SContainer>
            <Link to={props.to}>
                <SIcon src={backIcon} alt="Back Icon" />
            </Link>
            <STitle>{props.title}</STitle>
            <Link to="/">
                <SIcon src={headerIcon} alt="Header Icon" />
            </Link>
        </SContainer>
    )
}

export default Header
