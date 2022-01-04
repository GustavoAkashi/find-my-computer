import React, { useState } from 'react'
import styled from 'styled-components'
import Question from '../components/Question'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Quiz = () => {

    const [question, setQuestion] = useState(1);


    let nextQuestion = () => {
        setQuestion = question + 1;
    }


    return (
        <Container>
            <ContentWrapper>
                <HeaderWrapper>
                    <Title>
                        Question
                    </Title>
                    <QuestionCounter>
                        {question}/10
                    </QuestionCounter>
                </HeaderWrapper>
                <Question id={question}></Question>
                <Footer>
                    <LeftArrow onClick={() => (question > 1) ? setQuestion(question - 1) : 0}>
                        <AiOutlineArrowLeft size={40} />
                    </LeftArrow>
                    <RightArrow onClick={() => (question < 10) ? setQuestion(question + 1) : 0}>
                        <AiOutlineArrowRight size={40} />
                    </RightArrow>
                </Footer>
            </ContentWrapper>
        </Container>
    )
}

export default Quiz


const Container = styled.div`
    background: #870dd9;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const ContentWrapper = styled.div`
    background:#ffffff;
    height: 500px;
    width: 800px;
    display:flex;
    flex-direction:column;
`

const HeaderWrapper = styled.div`
    background: #f5f5f5;
    height: 100px;
    display:flex;
    align-items:center;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 24px;
    justify-content:space-between;
`

const Title = styled.h1`
    font-size: 24px;
`

const QuestionCounter = styled.h1`
    font-size: 24px;
`

const Footer = styled.div`
    background:#f5f5f5;
    height: 100px;
    display:flex;
    justify-content:right;
    align-items:center;
    padding-right: 2rem;
`

const LeftArrow = styled.button`
    cursor:pointer;
    border:none;
    background: none;
`

const RightArrow = styled.button`
    cursor:pointer;
    border:none;
    background: none;
`