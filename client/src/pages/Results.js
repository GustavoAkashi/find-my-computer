import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router'
import styled from 'styled-components'
import computer_list from '../data/computers'
import notebook_list from '../data/notebooks'

const Results = props => {

    const location = useLocation()

    const [option, setOption] = useState('computer')

    const query_parameters = location.state

    console.log(query_parameters)

    return (
        <Container>
            <ResultsWrapper>
                <Header>Encontramos alguns resultados para voce !</Header>
                <OptionsWrapper>
                    <OptionButton isSelected={option == 'computer'} onClick={() => setOption('computer')}>Desktops</OptionButton>
                    <OptionButton isSelected={option == 'notebook'} onClick={() => setOption('notebook')}>Notebooks</OptionButton>
                </OptionsWrapper>
                <DisplayResultsWrapper>
                    {(option === 'computer' ? computer_list : notebook_list).map((item, id) => (
                        <ProductWrapper id={id}>
                            <ProductInfos>
                                <ProductName>{item.name}</ProductName>
                                <SpecifiedInfo><b>Placa de vídeo:</b> {item.video}</SpecifiedInfo>
                                <SpecifiedInfo><b>RAM:</b> {item.ram}</SpecifiedInfo>
                                <SpecifiedInfo><b>Processador:</b> {item.processador}</SpecifiedInfo>
                                <SpecifiedInfo><b>Placa-mãe:</b> {item.placamae}</SpecifiedInfo>
                                <SpecifiedInfo><b>Armazenamento:</b> {item.armazenamento}</SpecifiedInfo>

                            </ProductInfos>
                            <ProductImageWrapper>
                                <ProductImage img_url={item.img} />
                                <ProdutPrice>R$ {item.preco}</ProdutPrice>
                            </ProductImageWrapper>
                        </ProductWrapper>
                    ))}

                </DisplayResultsWrapper>
            </ResultsWrapper>
        </Container>
    )
}

export default Results

const Container = styled.div`
    background: #870dd9;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 1rem;

`

const ResultsWrapper = styled.div`
    background: #f5f5f5;
    width:1200px;
    height: 100%;
    border-radius: 24px;
    box-sizing:border-box;
    padding: 1rem;
    border: 2px solid black;
    display:flex;
    flex-direction: column;
`

const Header = styled.h1`
    font-size: 48px;;
    padding: 2rem;
    margin-top: 0;
    background: orange;
    border-radius: 24px;
    border: 2px solid black;
`

const OptionsWrapper = styled.div`
    display:flex;
    justify-content:space-around;
    background: #f5f5f5;
    padding: 1rem; 
    border: 2px black;
    border-style: solid none;
    margin: 1rem;
`

const OptionButton = styled.button`
    font-size: 24px;
    border-radius: 24px;
    box-sizing:border-box;
    height: 50px;
    background-color: ${props => props.isSelected ? '#8C8C8A' : 'white'};
    box-shadow:rgba(0, 0, 0, .2) 0 3px 5px - 1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
    cursor: pointer;
    &:hover {
        transform: translate(-1%, -3%);
        transition: 0.3s ease-out;
      }
`

const DisplayResultsWrapper = styled.div`
    border: 2px solid black;
    height: 100vh;
    padding: 0 1rem;
    border-radius: 24px;
    overflow:auto;
    
`

const ProductWrapper = styled.div`
      display:flex;
      justify-content:space-between;
      border: 1px solid black;
      border-radius: 24px;
      margin-top: 1rem;
`

const ProductInfos = styled.div`
      width: 70%;
      padding: 2rem;
      display:flex;
      flex-direction:column;
`

const ProductImageWrapper = styled.div`
      width:30%;
      display:flex;
      justify-content: center;
      align-items:center;
      flex-direction:column;
`

const ProductImage = styled.img`
      height: 320px;
      background: white;
      width: 320px;
      background-image: url(${props => props.img_url});
      background-size: cover;
      background-repeat:no-repeat;
`

const ProductName = styled.h1`
      font-size: 38px;
`

const SpecifiedInfo = styled.h2`
      font-size: 20px;

`

const ProdutPrice = styled.h1`
      color: green;
      font-size: 32px;
`