import React, {Component} from 'react'
import {Store, Empty, StandBy} from 'components'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'

class App extends Component {
  state={stores: [], storeIdList: [], distance: 500, onSearching: false}

  componentDidMount() {
    this.load()
  }
  
  search = () => {
    const {distance} = this.state
    if (distance + 500 <= 5000) {
      this.setState({distance: distance + 500})
    }
    this.load()
  }

  load = () => {
    this.setState({onSearching: true})
    navigator.geolocation.getCurrentPosition((pos) => {
      const latitude = pos.coords.latitude
      const longitude = pos.coords.longitude

      const {distance, stores, storeIdList} = this.state
      const extendedStores = stores
      const storeCodeListForCheck = storeIdList
      fetch(`https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${latitude}&lng=${longitude}&m=${distance}`)
        .then(response => response.json())
        .then(jsonObject => {
          jsonObject.stores.forEach(element => {
            if (storeCodeListForCheck.indexOf(element.code) === -1) {
              element.distance = (distance / 1000).toFixed(1)
              element.remain_level = this.getRemainLevel(element.remain_stat)
              storeCodeListForCheck.push(element.code)
              extendedStores.push(element)
            }
          })
          extendedStores.sort((store1, store2) => {
            return store1.remain_level <= store2.remain_level ? 1 : -1;  
          })
          this.setState({stores: extendedStores, onSearching: false})
        })
    })
  }

  getRemainLevel = (remainStat) => {
    switch (remainStat) {
      case 'plenty':
        return 5
      case 'some':
        return 4
      case 'few':
        return 3
      case 'empty':
        return 2
      case 'break':
        return 1
      default:
        return 0
    }
  }

  render() {
    const {stores, distance, onSearching} = this.state
    return (
      <div className="app">
        <Button onClick={this.search}>더 넓게 찾아보기 [{(distance / 1000).toFixed(1)}km]</Button>
        <div className="app-contents">
          {onSearching ? <StandBy /> : 
            stores.length === 0 ? <Empty /> : 
            stores.map((store, key) => {
              return (<Store key={key} store={store} />)
          })}
        </div>
      </div>
    )
  }
}

export default App
