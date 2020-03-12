import React, {Component} from 'react'

class App extends Component {
  state={stores: []}

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const latitude = pos.coords.latitude
      const longitude = pos.coords.longitude

      const stores = []
      fetch(`https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${latitude}&lng=${longitude}&m=500`)
        .then(response => response.json())
        .then(jsonObject => {
          jsonObject.stores.forEach(element => {
            stores.push(element)
          })
          this.setState({stores})
          console.log(this.state.stores)
        })
    })
  }

  render() {
    const {stores} = this.state
    return (
      <div className='app'>
        {
          stores.map((store, key) => {
            return (<p key={key}>{store.name}</p>)
          })
        }
      </div>

    )
  }
}

export default App
