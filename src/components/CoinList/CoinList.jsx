import React, { Component } from 'react';
import styled from 'styled-components';
import Coin from '../Coin/Coin';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
`;

export default class CoinList extends Component {
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th><h4>Name</h4></th>
                        <th><h4>Ticker</h4></th>
                        <th><h4>Price</h4></th>
                        {this.props.showBalance ? <th><h4>Balance</h4></th> : null}
                        <th><h4>Actions</h4></th>
                    </tr>
                </thead> 
                <tbody>
                    {
                        this.props.coinData.map( value =>
                            <Coin key={value.ticker} 
                            {...value}
                            balance= {value.balance} 
                            handleRefresh={this.props.handleRefresh}
                            showBalance={this.props.showBalance} 
                            /> 
                        )
                    }
                </tbody>
            </Table>
        )
    }
}
