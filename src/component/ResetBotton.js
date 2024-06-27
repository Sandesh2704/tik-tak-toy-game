import React from 'react'
import './RestButton.css'

export default function ResetBotton({ resetBoard, resetScore}) {
  return (
    <div className='buttons'>
     <button onClick={resetBoard} className='reset_btn'>Reset</button>
     <button onClick={resetScore} className='reset_btn'>Reset Score</button>
    </div>
   
  )
}
