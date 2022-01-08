import React, { useState } from 'react'
import styled from 'styled-components'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

var results = {
    ram: '',
    budget: '',
    video: '',
    processador: '',
}

const Quiz = () => {

    const [question, setQuestion] = useState(0);

    const [ram, setRam] = useState(-1);

    const [budget, setBudget] = useState(-1);

    const [video, setVideo] = useState(-1);

    const [processor, setProcessor] = useState(-1);



    const questions = [
        {
            questionType: 'ram',
            questionMarker: ram,
            questionText: 'Quanto voce tem que usar de RAM ?',
            questionOptions: [
                { text: 'Vou usar muita RAM', id: 0, value: 32 },
                { text: 'Vou usar pouca RAM', id: 1, value: 8 },
                { text: 'Vou usar RAM as vezes', id: 2, value: 16 },
                { text: 'Quero algo normal não muito caro', id: 3, value: 8 },
            ]

        },
        {
            questionType: 'budget',
            questionMarker: budget,
            questionText: 'Quanto voce pretende gastar ?',
            questionOptions: [
                { text: 'Menos de 2000', id: 0, value: 2000 },
                { text: 'Menos de 3000', id: 1, value: 3000 },
                { text: 'Menos de 4000', id: 2, value: 4000 },
                { text: 'Indiferente', id: 3, value: 1123456 },
            ]
        },
        {
            questionType: 'video',
            questionMarker: video,
            questionText: 'Pra qual finalidade voce pretende usar o computador ?',
            questionOptions: [
                { text: 'Jogos e trabalho / estudo', id: 0, value: 5 },
                { text: 'Trabalho com edição de imagens e vídeos', id: 1, value: 5 },
                { text: 'Trabalho com programação', id: 2, value: 2 },
                { text: 'Uso Cotidiano', id: 3, value: 1 },
            ]
        },
        {
            questionType: 'processor',
            questionMarker: processor,
            questionText: 'Voce pretende usar o processador ?',
            questionOptions: [
                { text: 'Muito', id: 0, value: 3 },
                { text: 'Pouco', id: 1, value: 1 },
                { text: 'Muito demais', id: 2, value: 4 },
                { text: 'Razoavelmente', id: 3, value: 2 },
            ]
        },
    ]

    const handleOption = (type, optionId, optionValue) => {
        console.log(type)
        if (type === 'ram') {
            setRam(optionId)
            results.ram = optionValue
        } else if (type === 'budget') {
            setBudget(optionId)
            results.budget = optionValue
        } else if (type === 'video') {
            setVideo(optionId)
            results.video = optionValue
        } else if (type === 'processor') {
            setProcessor(optionId)
            results.processador = optionValue
        }
    }

    const handleArrows = (type) => {
        if (type === 'back') {
            if (question > 0) {
                setQuestion(question - 1)
            }
        } else {
            if (question < questions.length - 1) {
                setQuestion(question + 1)
            }
        }
    }

    return (
        <Container>
            <ContentWrapper>
                <HeaderWrapper>
                    <Title>
                        Question
                    </Title>
                    <QuestionCounter>
                        {question + 1}/{questions.length}
                    </QuestionCounter>
                </HeaderWrapper>
                <QuestionWrapper>
                    <QuestionTitle>{questions[question].questionText}</QuestionTitle>
                    <QuestionOptionWrapper>
                        {questions[question].questionOptions.map((option) => (
                            <AnswersWrapper>
                                <QuestionOption onClick={() => handleOption(questions[question].questionType, option.id, option.value)} isSelected={option.id === questions[question].questionMarker}>{option.text}</QuestionOption>
                            </AnswersWrapper>

                        ))}
                    </QuestionOptionWrapper>

                </QuestionWrapper>
                <Footer>
                    <LeftArrow onClick={() => handleArrows('back')}>
                        <AiOutlineArrowLeft size={40} />
                    </LeftArrow>
                    {
                        (question < questions.length - 1 ?
                            <RightArrow onClick={() => handleArrows('foward')}>
                                <AiOutlineArrowRight size={40} />
                            </RightArrow>
                            : <></>)
                    }
                    {
                        (question == questions.length - 1 ? (<SubmitButton to='/results' state={results}>Send !</SubmitButton>) : <></>)
                    }
                </Footer>
            </ContentWrapper>
        </Container>
    )
}

export default Quiz


const Container = styled.div`
    background: #870DD9;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const ContentWrapper = styled.div`
    background:#FFD23F;
    height: 600px;
    width: 1000px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border: 4px solid #272932;
    border-radius: 12px;
`

const HeaderWrapper = styled.div`
    background: #FFD23F;
    height: 100px;
    display:flex;
    align-items:center;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 24px;
    justify-content:space-between;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`

const Title = styled.h1`
    font-size: 24px;
`

const QuestionCounter = styled.h1`
    font-size: 24px;
`

const QuestionWrapper = styled.div`
    display:flex;
    flex-direction:column;
    background: #FF6700;
    height:100%;
    padding: 1rem;
    border: 1px solid #272932;
`

const QuestionTitle = styled.h1`
`

const QuestionOptionWrapper = styled.div`
    display:flex;
    flex-direction:column;
    font-size: 24px;
    padding-left: 2rem;
    justify-content:center;
    align-items:center;
`

const AnswersWrapper = styled.div`
    display:flex;
    padding: 4px;
`

const QuestionOption = styled.button`
    padding-top:2rem;
    width: 400px;
    border-radius: 5px;
    background: ${props => props.isSelected ? 'green' : 'white'};
    border-width:thin;
    box-shadow: 5px 5px black;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-size: 24px;
    border:none;
    text-align:center;

    

    &:hover {
        transform: translate(-1%, -3%);
        transition: 0.3s ease-out;
    }
`

const Footer = styled.div`
    background:#FFD23F;
    height: 100px;
    display:flex;
    align-items:center;
    padding-right: 2rem;
    justify-content:space-around;
    border-radius: 12px;
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
const SubmitButton = styled(Link)`
      cursor: pointer;
      font-size: 24px;
      background: #FF6700;
      text-decoration:none;
      color:black;
      border: 2px solid #272932;
      border-radius: 12px;
      width:200px;
      display:flex;
      justify-content:center;
      align-items:center;
`