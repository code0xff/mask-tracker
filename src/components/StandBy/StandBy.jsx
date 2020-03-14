import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Alert} from 'react-bootstrap'

export default function StandBy() {
  return (
    <div className="stand-by">
      <Alert variant="success">공적마스크 판매 약국을 검색중입니다...</Alert>
    </div>
  )
}