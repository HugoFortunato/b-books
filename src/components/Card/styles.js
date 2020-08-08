import styled from 'styled-components'

export const SContainer = styled.div`
    width: 350px;
    height: 500px;
    margin: 10px 5px;
    background-color: #212223;
    border-radius: 15px;
    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    a {
        width: 250px;
        height: 50px;
        font-size: 20px;
    }
`

export const SImage = styled.img`
    width: 200px;
    height: 300px;
    margin-top: 20px;
`

export const STitle = styled.span`
    font-size: 15px;
    color: #ffffff;
    text-align: center;
`
