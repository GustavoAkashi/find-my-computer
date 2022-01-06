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
    background: orange;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 1rem;
    justify-content:space-around;
`

const Title = styled.h1`
    size: 14px;
`

const StartButton = styled(Link)`
    background-color: black;
    height: 40px;
    color: white;
    width: 256px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 1rem;
    border-radius: 100px;
    text-transform:uppercase;
    font-size: 12px;
    opacity: 0.85;
    cursor:pointer;

`