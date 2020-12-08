import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Td = styled.td`
    color: #fff;
    border: 1px solid #cccccc;
    width: 14vw;
`;

const TdControls = styled(Td)`
    width: 32vw;
`;

const TdName = styled(Td)`
    width: 24vw;
`;

const Button = styled.button`
    font-size: 11px;
    width: 64px;
    margin: 3px 5px 0;
`;

export default function Coin(props) {

    const handleRefresh = (event) => {
      // Prevent the default action of submitting the form
      event.preventDefault();
      props.handleRefresh(props.tickerId);
    }
    const handleBuy = (event) => {
      // Prevent the default action of submitting the form
      event.preventDefault();
      props.handleTransaction(true, props.tickerId);
    }

    const handleSell = (event) => {
      // Prevent the default action of submitting the form
      event.preventDefault();
      props.handleTransaction(false, props.tickerId);
    }
  
    return (
         <tr>
            <TdName id="name-row"> {props.name} </TdName>
            <Td> {props.ticker} </Td>
            <Td> $ {props.price} </Td>
            <Td> $ {props.showBalance ? props.balance : '-'} </Td>
            <TdControls>
              <form action="#" method="POST" >
                <Button className="btn btn-info" onClick = {handleRefresh} >
                  Refresh
                </Button>
                <Button className="btn btn-success" onClick = {handleBuy} >
                  Buy
                </Button>
                <Button className="btn btn-danger" onClick = {handleSell} >
                  Sell
                </Button>
              </form>
            </TdControls>
          </tr>
       );

}
    
    
    Coin.propTypes = {
      name: PropTypes.string.isRequired,
      ticker: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      balance: PropTypes.number.isRequired,
    }
  