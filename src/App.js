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
const formatPrice = price => parseFloat(Number(price).toFixed(3))

class App extends React.Component {
  state = {
      balance: 10000,
      showBalance: true,
      coinData: [ ]
    }
    
  componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id)); 
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes['USD'].price),
      };
    });
    /* Retrieve the prices from axios */
    this.setState({ coinData: coinPriceData });
  }


  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }

  handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = this.state.coinData.map( function( values ) {
      let newValues = { ...values };
      if ( valueChangeId === values.key ) {
        newValues.price = newPrice;
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
