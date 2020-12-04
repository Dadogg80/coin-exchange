import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Td = styled.td`
    color: #fff;
    border: 1px solid #cccccc;
    width: 25vh;
`;
const Button = styled.button`
    border-radius: 9px;
    padding: 7px;
    color: #fff;
    background-color: blue;
`;

export default class Coin extends Component {
     
     handleClick = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
      }
      
      render() {
        return (
          <tr>
            <Td> {this.props.name} </Td>
            <Td> {this.props.ticker} </Td>
            <Td> ${this.props.price} </Td>
            {this.props.showBalance ? <Td> ${this.props.balance} </Td> : null}
            <Td>
              <form action="#" method="POST">
                <Button onClick={this.handleClick}>refresh</Button>
              </form>
            </Td>
          </tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
}