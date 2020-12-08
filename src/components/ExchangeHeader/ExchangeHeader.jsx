import React, { Component } from 'react';
import logo from './bitcoin-img.svg';
import styled from 'styled-components';

const Img = styled.img`
    height: 8rem;
    pointer-events: none;
    margin: 5px;
    padding: 20px;
`;

const Header = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

const H2 = styled.h2`
    font-size: 3rem;
    line-height: 8rem;
    fold-weight: bold;
    min-width: 300px; 
`;



export default class ExchangeHeader extends Component {
    render() {
        return (
            
        <Header>
            <Img src= {logo}  alt= "Bitcoin logo"  />
            <H2>
                Coin Exchange
           </H2>
        </Header>

        
         
        );
    }
}
