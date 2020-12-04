import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';
import axios from 'axios';


const Div = styled.div`
  text-align: center;
  color: #cccccc;
  background-color: #4d4d4e;
`;

const COIN_COUNT = 10;

class App extends React.Component {
  state = {
      balance: 10000,
      showBalance: true,
      coinData: []
    }
    

  componentDidMount = () => {
    axios.get('https://api.coinpaprika.com/v1/coins')
        .then( response => {
          debugger;
            let coinData = response.data.slice(0, COIN_COUNT).map(function(coin) {
              return {
                key: coin.id,
                name: coin.name,
                ticker: coin.symbol,
                balance: 0,
                price: 0,
              };
            });
            console.log('setting the state');
            this.setState({ coinData });
            console.log('DONE setting the state');
        });
      console.log('componentDidMount is DONE');
      debugger;
  }

  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }


  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function( values ) {
      let newValues = { ...values };
      if ( valueChangeTicker === values.ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });
    
    this.setState({ coinData: newCoinData });
  }
  render() {
    return (
      <Div className="App">
        <ExchangeHeader />
        < AccountBalance 
            amount = { this.state.balance } 
            showBalance={this.state.showBalance} 
            handleBalanceVisibilityChange={this.handleBalanceVisibilityChange}
        />
        < CoinList 
            coinData = { this.state.coinData } 
            showBalance = { this.state.showBalance }
            handleRefresh={this.handleRefresh} 
        />
      </Div>
      
    );
  }
  
}

export default App;
