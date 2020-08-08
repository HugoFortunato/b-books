import React from 'react'

import { SContainer, SWrapperLogo, SWrapperLogoImage } from './styles'
import Button from '../../components/Button'
import Logo from '../../assets/imagens/logoicon.png'
import LogoImage from '../../assets/imagens/heroicon.svg'

function Home() {
    return (
        <SContainer>
            <SWrapperLogo>
                <img src={Logo} alt="Logo" />
                <span>
                    Seu acervo de livros <br /> online.
                </span>
                <Button to="/products" label={'VER LIVROS'} />
            </SWrapperLogo>
            <SWrapperLogoImage>
                <img src={LogoImage} alt="Library" />
            </SWrapperLogoImage>
        </SContainer>
    )
}
export default Home
