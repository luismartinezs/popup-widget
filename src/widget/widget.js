import React, { Component } from 'react';
import Modal from 'react-modal';
import './widget.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faTimes) // adds an icon to lib
    

        class Widget extends Component {
            render() {
                return (
                    <Modal
                        isOpen={this.props.showModal}
                        contentLabel="Minimal Modal Example"
                        onRequestClose={this.props.handleCloseModal}
                        className="modal"
                    // overlayClassName="Overlay"
                    >
                        <div className='modalWrapper'>
                            <button className='btnCloseModal' onClick={this.props.handleCloseModal}>< FontAwesomeIcon icon = { faTimes } /></button>
                        </div>
                    </Modal>
                );
            }
        }

export default Widget;