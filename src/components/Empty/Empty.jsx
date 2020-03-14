import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Alert} from 'react-bootstrap'

export default function Empty() {
  return (
    <div className="empty">
      <Alert variant="warning">근처에 구입가능 매장 정보가 없습니다.<br/>더 넓게 찾아보기로 추가 검색해보세요.</Alert>
    </div>
  )
}