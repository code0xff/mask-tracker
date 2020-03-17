import React, {Component} from 'react'
import {Store, Info} from 'components'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form} from 'react-bootstrap'
import Level from '../../const/Level'

class App extends Component {
  state={stores: [], boundary: 500, onSearching: false}

  componentDidMount() {
    this.load()
  }
  
  load = () => {
    this.setState({onSearching: true})
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude
      const lng = pos.coords.longitude
      
      const {boundary} = this.state
      const stores = []
      fetch(`https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${lat}&lng=${lng}&m=${boundary}`)
        .then(response => response.json())
        .then(jsonObject => {
          jsonObject.stores.forEach(element => {
            element.distance = this.computeDistance(lat, lng, element.lat, element.lng).toFixed(2)
            element.remain_level = element.remain_stat ? Level[element.remain_stat].level : 0
            stores.push(element)
          })
          stores.sort((store1, store2) => {
            if (store1.remain_level === store2.remain_level) {
              return store1.distance >= store2.distance ? 1 : -1;  
            }
            return store1.remain_level < store2.remain_level ? 1 : -1;  
          })
          this.setState({stores, onSearching: false})
        })
    })
  }

  computeDistance = (lat1, lng1, lat2, lng2) => {
    const startLatRads = this.degreesToRadians(lat1)
    const startLongRads = this.degreesToRadians(lng1)
    const destLatRads = this.degreesToRadians(lat2)
    const destLongRads = this.degreesToRadians(lng2)

    const Radius = 6371
    return Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
     Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) 
     * Radius
  }

  degreesToRadians = (degrees) => {
    return (degrees * Math.PI) / 180
  }

  selectChangeHandler = (e) => {
    this.setState({boundary: e.target.value})
    this.load()
  }

  render() {
    const {stores, onSearching} = this.state
    return (
      <div className="app">
        <Form.Group controlId="boundary-size-form">
          <Form.Control as="select" custom="true" onChange={this.selectChangeHandler}>
            <option value="500">0.5km</option>
            <option value="1000">1km</option>
            <option value="2000">2km</option>
            <option value="3000">3km</option>
            <option value="4000">4km</option>
            <option value="5000">5km</option>
          </Form.Control>
        </Form.Group>
        <Button variant="success" onClick={this.load}>새로고침</Button>
  
        <div className="app-contents">
          {onSearching ? 
            <Info variant="primary" message="공적마스크 판매 약국을 검색중입니다..."/> : 
            stores.length === 0 ?
              <Info 
                variant="warning" 
                message="요청하신 범위 안에 공적마스크 판매 약국이 없습니다..."
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
