import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button, Badge} from 'react-bootstrap'
import Level from '../../const/Level'

export default function Store({store}) {
  return (
    <div className="store">
      <Card style={{ width: '20rem' }} border={getStyleByLevel(store.remain_stat)}>
        <Card.Header>{store.name}</Card.Header>
        <Card.Body>
          <Card.Text>
            {store.addr}
          </Card.Text>
          <Button variant={getStyleByLevel(store.remain_stat)} size="sm" name={getLinkInfo(store)} onClick={linkToMap}>지도에서 보기</Button>&nbsp;
          <Button variant={getStyleByLevel(store.remain_stat)} size="sm" name={store.name} onClick={linkToStoreInfo}>정보검색</Button>
        </Card.Body>
        <Card.Footer>
          <Badge pill variant={getStyleByLevel(store.remain_stat)}>{store.distance}km</Badge>&nbsp;
          <Badge pill variant={getStyleByLevel(store.remain_stat)}>
            {Level[store.remain_stat] ? Level[store.remain_stat].message : '정보없음'}
          </Badge>
        </Card.Footer>
      </Card>
    </div>
  )
}

function getStyleByLevel(remainStat) {
  return Level[remainStat] ? Level[remainStat].style : 'secondary'
}

function getLinkInfo(store) {
  return store.name + ',' + store.lat + ',' + store.lng 
}

function linkToMap(e) {
  window.open(`https://map.kakao.com/link/map/${e.target.name}`)
}

function linkToStoreInfo(e) {
  window.open(`https://map.kakao.com/link/search/${e.target.name} 공적판매처`)
}