import React, { useState } from 'react'
import styled from 'styled-components'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

var results = {
    ram: '',
    budget: '',
    video: '',
    processador: '',
    tipo_armazenamento: '',
    qnt_armazenamento: '',
}

const Quiz = () => {

    const [question, setQuestion] = useState(0);

    const [budget, setBudget] = useState(-1);

    const [video, setVideo] = useState(-1);

    const [ArmazenamentoType, setArmazenamentoType] = useState(-1);

    const [ArmazenamentoQnt, setArmazenamentoQnt] = useState(-1);



    const questions = [
        {
            questionType: 'video',
            questionMarker: video,
            questionText: 'Para qual finalidade você pretende usar o computador ?',
            questionOptions: [
                { text: 'Jogos mais pesados como GTA, Forza Horizon, Crysis.', id: 0, value: 4 },
                { text: 'Jogos mais leves como FreeFire, League of Legends.', id: 1, value: 3 },
                { text: 'Edição de imagem e vídeo (Sony Vegas, Adobe premiere)', id: 2, value: 4 },
                { text: 'Programas de desenho técnico e engenharia (Autocad, Revit) ', id: 3, value: 3 },
                { text: 'Pacote office, microsoft teams, usar a internet casualmente.', id: 4, value: 0 },
                { text: 'Programação.', id: 5, value: 2 },
            ]

        },
        {
            questionType: 'budget',
            questionMarker: budget,
            questionText: 'Quanto voce pretende gastar ?',
            questionOptions: [
                { text: 'Menos de 1500', id: 0, value: 1500 },
                { text: 'Menos de 2500', id: 1, value: 2500 },
                { text: 'Menos de 3500', id: 2, value: 3500 },
                { text: 'Menos de 4500', id: 3, value: 4500 },
                { text: 'Indiferente', id: 4, value: 1123456 },
            ]
        },
        {
            questionType: 'armazenamento_ssd',
            questionMarker: ArmazenamentoType,
            questionText: 'Você gostaria de gostaria de gastar um pouco mais e ter um melhoria na rapidez de ligar o computador e abrir programas ?',
            questionOptions: [
                { text: 'Sim', id: 0, value: 2 },
                { text: 'Não', id: 1, value: 3 },
            ]
        },
        {
            questionType: 'armazenamento_qnt',
            questionMarker: ArmazenamentoQnt,
            questionText: 'Você precisará armazenar muitos arquivos ? (Fotos, vídeos)',
            questionOptions: [
                { text: 'Sim', id: 0, value: 400 },
                { text: 'Não', id: 1, value: 0 },
            ]
        },
    ]

    const handleOption = (type, optionId, optionValue) => {
        if (type === 'budget') {
            setBudget(optionId)
            results.budget = optionValue
        } else if (type === 'video') {
            setVideo(optionId)
            results.video = optionValue
            results.processador = optionValue
            if (optionValue >= 4) {
                results.ram = 16
            } else if (optionValue >= 3) {
                results.ram = 8
            } else {
                results.ram = 0
            }
        } else if (type === 'armazenamento_ssd') {
            setArmazenamentoType(optionId)
            results.tipo_armazenamento = optionValue
        } else if (type === 'armazenamento_qnt') {
            setArmazenamentoQnt(optionId)
            results.qnt_armazenamento = optionValue
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
    width: 600px;
    border-radius: 5px;
    background: ${props => props.isSelected ? 'green' : 'white'};
    border-width:thin;
    box-shadow: 5px 5px black;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-size: 18px;
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