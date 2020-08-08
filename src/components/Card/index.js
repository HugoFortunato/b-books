import React from 'react'

import { SContainer, STitle, SImage } from './styles'
import Button from '../Button'

function Card(props) {
    console.log(props)
    return (
        <SContainer>
            <SImage src={props.book.url} alt="image of the book" />
            <STitle>{props.book.title} </STitle>
            <Button to={props.to} label={props.label} onClick={props.onClick} />
        </SContainer>
    )
}

export default Card
