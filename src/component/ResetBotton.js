import React from 'react'
import './RestButton.css'

export default function ResetBotton({ resetBoard}) {
  return (
    <button onClick={resetBoard} className='reset_btn'>ResetBotton</button>
  )
}
