import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Alert} from 'react-bootstrap'

export default function Info({variant, message}) {
  return (
    <div className="info">
      <Alert variant={variant}>{message}</Alert>
    </div>
  )
}
