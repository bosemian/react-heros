import React, { Component } from 'react';
import classNames from 'classnames'

class ModalHero extends Component {

  closeModal = () => {
    this.props.close()
  }

  render() {
    console.log(this.props)
    const { status } = this.props
    const active = ['modal', { 'is-active': status }]
    return (
      <div className={active}>
        <div className="modal-background"></div>
        <div className="modal-content">
          Modal !
        </div>
        <button className="modal-close" onClick={this.closeModal}></button>
      </div>
    );
  }
}

export default ModalHero;