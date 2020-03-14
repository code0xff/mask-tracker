import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Alert} from 'react-bootstrap'

export default function StandBy() {
  return (
    <div className="stand-by">
      <Alert variant="success">공적마스크 구입이 가능한 매장 정보를 검색중입니다...</Alert>
    </div>
  )
}