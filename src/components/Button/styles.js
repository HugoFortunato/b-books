import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SButton = styled(Link)`
    width: 100%;
    height: 100px;
    max-width: 400px;
    color: #fdfdfd;
    background-color: #656464;
    border-radius: 30px;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: #12d87c;
        cursor: pointer;
    }
`
