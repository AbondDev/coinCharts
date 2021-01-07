import React, {Component} from "react";
import axios from "axios";
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'

export default class CoinChart extends Component{
  constructor(props) {
    super(props);
    this.state = {priceData: [], marketCapData: [], volumeData: []}
  }
  componentDidMount(){
    console.log("component mounted")
    axios.get(`http://localhost:8080/coins/${this.props.match.params.id}/charts`)
    .then(response => {
      this.setState({priceData: response.data.priceData,
                    marketCapData: response.data.marketCapData,
                    volumeData: response.data.volumeData});
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  render(){
    return (
      <div>
        <h3>{this.props.match.params.id} Charts</h3>
        <h4>Price</h4>

        <VictoryChart>
        <VictoryLine data={this.state.priceData} />
        </VictoryChart>

        <h4>Market Cap</h4>
        <VictoryChart  theme = {VictoryTheme.material}>
        <VictoryLine data={this.state.marketCapData} />
        </VictoryChart>

        <h4>Volume</h4>
        <VictoryChart theme = {VictoryTheme.material}>
        <VictoryLine data={this.state.volumeData} />
        </VictoryChart>
      </div>
    )
  }
}
