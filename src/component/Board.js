import React from 'react'
import './Board.css'

export default function Board({ board, onClick }) {

    return (
        <div className='board'>
            {
                board.map((value, index) => {
                    const style = value === 'X' ? "box x" : 'box o'
                    return (
                        <button
                            className={style}
                            key={index}
                            onClick={() => value === null && onClick(index)}
                        >
                            {value}
                        </button>
                    )
                })
            }
        </div>
    )
}
