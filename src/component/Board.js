import React from 'react'
import Box from './Box'
import './Board.css'

export default function Board({ board, onClick }) {

    return (
        <div className='board'>
            {
                board.map((value, index)=>{
                    return  <Box value={ value } key={index}  onClick={()=> value === null && onClick(index)}/>
                })
            }
        </div>
    )
}
