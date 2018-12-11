import React, { Component } from 'react';
import Modal from 'react-modal';
import Detail from './detail';
import Explore from './explore';
import './helper.css';
import './styles.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faTimes) // adds an icon to lib


class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTab: 1,
        };
        this.setActiveTab = this.setActiveTab.bind(this);
    }

    setActiveTab(index) {
        this.setState({
            showTab: index,
        })
    }

    render() {
        const [tab1Style, tab2Style] = this.state.showTab === 1 ?
            ['tabBtn activeTab', 'tabBtn lastTabBtn'] :
            ['tabBtn', 'tabBtn lastTabBtn activeTab'];

        return (
            <Modal
                isOpen={this.props.showModal}
                contentLabel="Minimal Modal Example"
                onRequestClose={this.props.handleCloseModal}
                className="modal"
            >
                
                <div className='tabContainer d-flex align-center w-100'>
                    <button className={tab1Style} onClick={() => this.setActiveTab(1)}>Detail</button>
                    <button className={tab2Style} onClick={() => this.setActiveTab(2)}>Explore</button>
                    <button className='btnCloseModal' onClick={this.props.handleCloseModal}>< FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <div className='contentWrapper w-100'>
                    <div className='contentContainer'>
                        {this.state.showTab === 1 ? <Detail /> : <Explore />}
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Widget;