import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
    return (
        <Container>
            <ContentWrapper>
                <Title>Find my computer !</Title>
                <StartButton to='/quiz'>Start Quiz</StartButton>
            </ContentWrapper>
        </Container>
    )
}

export default Home


const Container = styled.div`
    background: #870dd9;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;

`

const ContentWrapper = styled.div`
    width: 400px;
    height: 400px;
    background: #FF6700;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 1rem;
    justify-content:space-around;
    font-family:"Roboto";
    font-weight:bold;
    border: 4px solid #272932;
    border-radius: 12px;
`

const Title = styled.h1`
    font-size: 40px;
`

const StartButton = styled(Link)`
    height: 40px;
    color: white;
    width: 256px;
    display:flex;
    background: black;
    justify-content:center;
    align-items:center;
    padding: 1rem;
    border-radius: 100px;
    text-transform:uppercase;
    font-size: 12px;
    opacity: 0.85;
    cursor:pointer;
    font-size: 16px;
    text-decoration:none;

    &:hover {
        transform: translate(0, -3%);
        transition: 0.5s ease-in-out;
    }

`