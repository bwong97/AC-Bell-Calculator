import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      buyPrice: 0,
      sellPrice: 0,
      invSpace: 0,
      stonks: 0,
      hasBuy: false,
      hasInv: false
    }

    this.updateBuying = this.updateBuying.bind(this)
    this.updateInventory = this.updateInventory.bind(this)
    this.updateStonks = this.updateStonks.bind(this)
  }

  componentDidMount() {
    // this.setState({  })
  }

  updateBuying(e) {
    this.setState({ buyPrice: e.target.value, hasBuy: true })
    setTimeout(() => {
      if(this.state.hasBuy && this.state.hasInv) {
        this.updateStonks()
      }
    }, 100);
  }

  updateInventory(e) {
    this.setState({ invSpace: e.target.value, hasInv: true })
    setTimeout(() => {
      if(this.state.hasBuy && this.state.hasInv) {
        this.updateStonks()
      }
    }, 100);
  }

  updateStonks(e) {
    //change this when selling is implemented
    let stonks = (this.state.invSpace * 100) * this.state.buyPrice
    this.setState({ stonks: stonks })
  }

  render() {
    return (
      <div className="App-header">
        <h2>Animal Crossing Stonks Converter</h2>

        <label htmlFor="buy">Buying (Daisy Mae)</label>
        <br/>
        <input id="buy" type="number" onChange={this.updateBuying}/>
        <br/>
        <br/>

        <label htmlFor="inv">Inventory (1-40)</label>
        <br/>
        <input id="inv" type="number" onChange={this.updateInventory}/>
        <br/>
        <br/>

        {/* <button onClick={this.updateStonks}>Calculate</button> */}

        {/* <label htmlFor="sell">Selling (Timmy & Tommy)</label>
        <br/>
        <input id="sell" type="number" /> */}

        <h5>How many bells to fill my whole inventory with turnips?</h5>
        <div>{this.state.stonks} bells</div>
      </div>
    )
  }

}

export default App