import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Td = styled.td`
    color: #fff;
    border: 1px solid #cccccc;
    width: 30vh;
`;

const Button = styled.button`
    border-radius: 9px;
    margin: 5px;
    color: #fff;
    background-color: #009900;
`;

export default function Coin(props) {

    const handleClick = (event) => {
      // Prevent the default action of submitting the form
      event.preventDefault();
      props.handleRefresh(props.tickerId);
    }
  
    return (
         <tr>
            <Td id="name-row"> {props.name} </Td>
            <Td> {props.ticker} </Td>
            <Td> ${props.price} </Td>
            {props.showBalance ? <Td> ${props.balance} </Td> : null}
            <Td>
              <form action="#" method="POST">
                <Button onClick={handleClick}>refresh</Button>
              </form>
            </Td>
          </tr>
       );

}
    
    
    Coin.propTypes = {
      name: PropTypes.string.isRequired,
      ticker: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      balance: PropTypes.number.isRequired,
    }
  