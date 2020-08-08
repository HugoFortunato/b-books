import React from 'react'

import { SButton } from './styles'

function Button(props) {
    return (
        <SButton to={props.to} onClick={props.onClick}>
            {props.label}
        </SButton>
    )
}

export default Button
