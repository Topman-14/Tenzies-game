import React from 'react'

export default function Die(props) {
  const style = {
    backgroundColor: props.isHeld? "purple" : 'white',
    color: props.isHeld? "white" : 'rgb(47, 1, 53)',
    // borderColor: props.isHeld? "white" : 'rgb(47, 1, 53)'
  }

  return (
    <div className='die' style ={style} onClick={props.handleClick}>
        <h1 style ={style}>{props.value}</h1>
    </div>
  )
}
