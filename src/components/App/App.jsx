import React, {Component} from 'react'
import {Store, Info} from 'components'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import Level from '../../const/Level'

class App extends Component {
  state={stores: [], storeCodeList: [], distance: 500, onSearching: false}

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

      const {distance, stores, storeCodeList} = this.state
      const extendedStores = stores
    
      fetch(`https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${latitude}&lng=${longitude}&m=${distance}`)
        .then(response => response.json())
        .then(jsonObject => {
          jsonObject.stores.forEach(element => {
            const selectedStoreIndex = storeCodeList.indexOf(element.code)
            if (selectedStoreIndex === -1) {
              element.distance = (distance / 1000).toFixed(1)
              element.remain_level = element.remain_stat ? Level[element.remain_stat].level : 0
              extendedStores.push(element)
            } else {
              extendedStores[selectedStoreIndex].remain_stat = element.remain_stat
              extendedStores[selectedStoreIndex].remain_level = element.remain_stat ? Level[element.remain_stat].level : 0
            }
          })
          extendedStores.sort((store1, store2) => {
            return store1.remain_level <= store2.remain_level ? 1 : -1;  
          })
          const storeCodeListForCheck = extendedStores.map(store => store.code)
          this.setState({stores: extendedStores, onSearching: false, storeCodeList: storeCodeListForCheck})
        })
    })
  }

  render() {
    const {stores, distance, onSearching} = this.state
    return (
      <div className="app">
        <Button onClick={this.search} style={{'marginBottom': '0.5rem'}}>더 넓게 찾아보기 [{(distance / 1000).toFixed(1)}km]</Button>
        <Button variant="success" onClick={this.load}>새로고침</Button>
        <div className="app-contents">
          {onSearching ? 
            <Info variant="primary" message="공적마스크 판매 약국을 검색중입니다..."/> : 
            stores.length === 0 ?
              <Info 
                variant="warning" 
                message="더 넓게 찾아보기로 추가 검색해보세요..."
              /> : 
              stores.map((store, key) => {
                return (<Store key={key} store={store} />)})
          }
        </div>
      </div>
    )
  }
}

export default App
