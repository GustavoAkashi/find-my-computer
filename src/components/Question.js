import React from 'react'
import styled from 'styled-components'

const Question = (props) => {
    return (
        <Container>
            <QuestionTitle>Essa é a questao de numero {props.id} </QuestionTitle>
        </Container>
    )
}

export default Question

const Container = styled.div`
    display:flex;
    flex-direction:column;
    background: orange;
    width: 100%;
    height: 100%;
`

const QuestionId = styled.h1`
    font-size: 24px;
    height:50px;
    margin-top:0px;
    background: white;
`

const QuestionTitle = styled.h2`
    font-size: 18px;
`