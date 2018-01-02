import React, { Component } from 'react'
import SimpleStorageContract from './../../build/contracts/SimpleStorage.json'
import getWeb3 from './../utils/getWeb3'
// import './utils/scripts';

import './../css/oswald.css'
import './../css/open-sans.css'
import './../css/pure-min.css'
import './App.css'
import Header from './header'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storedData: 0,
      web3: null,
      accounts: null,

    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3,
        accounts: results.web3.eth.accounts
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  // getBalance() {
  //   getWeb3
  //   .then(results => {
  //     this.setState({
  //       web3: results.web3,
  //       accounts: results.web3.eth.getBalance(this.state.accounts)
  //     })
  //   })
  //   .catch(() => {
  //     console.log('Error finding web3.')
  //   })
  // }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const simpleStorage = contract(SimpleStorageContract)
    simpleStorage.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var simpleStorageInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      simpleStorage.deployed().then((instance) => {
        simpleStorageInstance = instance

        // Stores a given value, 5 by default.
        return simpleStorageInstance.set(5, {from: accounts[0]})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return simpleStorageInstance.get.call(accounts[0])
      }).then((result) => {
        // Update state with the result.
        return this.setState({ storageValue: result.c[0] })
      })
    })
  }

  render() {
    return (
      <main className="body">
      <Header />
          <div className="container pure-g">
            <div className="container pure-u-1-1">
              <li>{this.state.accounts}</li>
              {this.props.children}
            </div>
          </div>
      </main>
    );
  }
}

export default App;
