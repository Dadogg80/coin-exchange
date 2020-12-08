import React from 'react';
import styled from 'styled-components';
import Coin from '../Coin/Coin';

const Table = styled.table`
    font-size: 1rem;
`;

export default function CoinList(props) {
    return (
        <Table className="table table-primary table-bordered">
        <thead>
            <tr>
                <th><h4>Name</h4></th>
                <th><h4>Ticker</h4></th>
                <th><h4>Price</h4></th>
                <th><h4>Balance</h4></th>
                <th><h4>Actions</h4></th>
            </tr>
        </thead> 
        <tbody>
            {
                props.coinData.map( value =>
                    <Coin key = { value.key } 
                    { ...value }
                    balance = { value.balance } 
                    handleRefresh = { props.handleRefresh }
                    handleTransaction = { props.handleTransaction }
                    showBalance = { props.showBalance }
                    tickerId = { value.key }
                    /> 
                )
            }
        </tbody>
        </Table>
    )
}

