import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

const Coin = props => (
  <tr>
    <td>{props.coin.item.id}</td>
    <td>
      <Link to={"/coins/"+props.coin.item.id+"/charts"}>View Chart</Link>
    </td>
  </tr>
)

export default class CoinList extends Component{
  constructor(props) {
    super(props);
    this.state = {coins: []}
  }
  componentDidMount() {
    axios.get('http://localhost:8080/coins')
    .then(response => {
      this.setState({coins: response.data});
    })
    .catch(function(error) {
      console.log(error)
    })
  }
  coinList() {
    return this.state.coins.map(function(currentCoin, i){
      return <Coin coin={currentCoin} key={i}/>
    })
  }
  render() {
    return (
      <div>
        <h3>Coins</h3>
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Responsible</th>
            </tr>
          </thead>
          <tbody>
            {this.coinList()}
          </tbody>
        </table>
      </div>
    )
  }

}
