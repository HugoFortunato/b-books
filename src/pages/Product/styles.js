import styled from 'styled-components'

export const SContainer = styled.div`
    height: 100%;
    background-color: #ffffff;
`

export const SCardWrapper = styled.div`
    width: 100%;
    margin-bottom: 50px;

    display: flex;
`

export const SImageWrapper = styled.div`
    img {
        width: 400px;
        height: 600px;
        margin: 50px;
    }
`

export const STitleWrapper = styled.div`
    margin-top: 45px;
    margin-right: 70px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .textone {
        font-family: 'Rowdies', cursive;
        font-weight: 300;
        font-size: 25px;
        opacity: 50%;
        margin-top: 10px;
    }

    input,
    button {
        width: 550px;
        height: 40px;
        font-family: 'Rowdies', cursive;
        font-weight: 200;
        font-size: 20px;
        opacity: 40%;
        padding: 20px;
        margin-top: 50px;
        border: 1px solid #707070;
        border-radius: 150px;
    }
`
