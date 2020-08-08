import styled from 'styled-components'

export const SContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #212223;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const SWrapperLogo = styled.div`
    width: 100%;
    padding: 150px 0;
    margin-right: 70px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    img {
        width: 570px;
        height: 170px;
    }

    span {
        margin-bottom: 35px;
        font-size: 45px;
        color: #12d87c;
        margin-right: 150px;
    }



    a {
        margin-right: 180px;
    }
`

export const SWrapperLogoImage = styled.div`
    width: 100%;
    margin-left: 70px;

    display: flex;
    align-items: center;

    img {
        width: 600px;
        height: 600px;
    }
`
