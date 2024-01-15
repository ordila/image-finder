import React, { Component } from 'react';
import css from './Modal.module.css';
import { IModalProps } from './Modal.types';

export default class Modal extends Component<IModalProps> {
  onModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      this.props.onModalClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onEscClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscClose);
  }

  onEscClose = () => {
    this.props.onModalClose();
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.onModalClick}>
        <div className={css.modal}>
          <img className={css.photo} src={this.props.modalData} alt="" />
        </div>
      </div>
    );
  }
}
