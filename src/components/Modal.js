import React from 'react'
import '../styles/Modal.scss'


export default function Modal(props) {
  return (
    <div className="modal" style={{
      transform: props.visible ? 'translate3d(30%,-50%,0)' : 'translate3d(-50%,-300%,0)',
      opactiy: props.visible ? '1' : '0'
    }}>

      <button className="close" onClick={props.cache}>X</button>
      <p>
        Une question ? 
        <br></br>
        N'hésitez pas a nous appeller au 01.55.25.25.25 🌱✨"
      </p>
      
    </div>
  )
}
