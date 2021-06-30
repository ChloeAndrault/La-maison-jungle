import React, { Component } from 'react'
import Modal from './Modal'
import '../styles/header/Phone.scss'
import phoneIcon from '../assets/phone.svg'

export default class Phone extends Component {

  state = {
    visible: false
  }
  
  montre = () => {
    this.setState({
      visible: true
    })
  }

  cache = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div className="c-phone">

        <button className="phone" onClick={this.montre}> 
          <img src={phoneIcon} alt='Contactez nous par téléphone'  />
        </button>

        <Modal 
          visible ={this.state.visible}
          cache={this.cache}
        />
        
      </div>
    )
  }
}