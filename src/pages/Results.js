import React from 'react'
import { useLocation, useParams } from 'react-router'
import styled from 'styled-components'

const Results = props => {

    const location = useLocation()

    const query_parameters = location.state



    return (
        <Container>
            <ResultsWrapper>
                <Header>Encontramos alguns resultados para voce !</Header>
                <OptionsWrapper>
                    <OptionButton>Desktops</OptionButton>
                    <OptionButton>Notebooks</OptionButton>
                </OptionsWrapper>
                <DisplayResultsWrapper>
                    <ProductWrapper>
                        <ProductInfos>
                            <ProductName>Computador muito legal !</ProductName>
                            <SpecifiedInfo>Placa de vídeo: </SpecifiedInfo>
                            <SpecifiedInfo>RAM: </SpecifiedInfo>
                            <SpecifiedInfo>Processador: </SpecifiedInfo>
                            <SpecifiedInfo>Placa-mãe: </SpecifiedInfo>
                            <SpecifiedInfo>Armazenamento: </SpecifiedInfo>
                        </ProductInfos>
                        <ProductImageWrapper>
                            imagem
                        </ProductImageWrapper>
                    </ProductWrapper>
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
    width:800px;
    height: 100%;
    border-radius: 24px;
    box-sizing:border-box;
`

const Header = styled.h1`
    font-size: 48px;;
    padding: 2rem;
    margin-top: 0;
    background: orange;
    border-radius: 24px;
`

const OptionsWrapper = styled.div`
    display:flex;
    justify-content:space-around;
    background: #f5f5f5;
    padding: 1rem; 
`

const OptionButton = styled.button`
    font-size: 24px;
    border-radius: 24px;
    box-sizing:border-box;
    height: 50px;
    box-shadow:rgba(0, 0, 0, .2) 0 3px 5px - 1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
    &:hover {
        transform: translate(-1%, -3%);
        transition: 0.3s ease-out;
      }
`

const DisplayResultsWrapper = styled.div`
    border: 12px solid black;
    height: 100vh;
    border-width: 4px;
    padding: 2px;
`

const ProductWrapper = styled.div`
      display:flex;
      height: 400px;
      background: blue;
      justify-content:space-between;
`

const ProductInfos = styled.div`
      background: orange;
      width: 70%;
      padding: 2rem;
      display:flex;
      flex-direction:column;
`

const ProductImageWrapper = styled.div`
      background: black;
      width:30%
`

const ProductImage = styled.img`

`

const ProductName = styled.h1`
      font-size: 38px;
`

const SpecifiedInfo = styled.h2`
      font-size: 16px;
`